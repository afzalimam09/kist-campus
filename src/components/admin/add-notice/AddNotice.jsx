import { useState } from "react";
import "./addNotice.css";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import app from "../../../firebase.js";
import { userRequest } from "../../../requestMethods";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const notyf = new Notyf({
    duration: 2000,
    position: {
        x: "right",
        y: "top",
    },
});

const AddNotice = ({ clickedComponent }) => {
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (!inputs.title) {
            notyf.error("Please enter title!");
            return;
        }
        if (!file) {
            notyf.error("Please upload image!");
            return;
        }
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                setProgress(progress);
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then(
                    async (downloadURL) => {
                        const notice = {
                            ...inputs,
                            imageUrl: downloadURL,
                        };
                        try {
                            await userRequest.post("/notice", notice);
                            notyf.success("Notice added successfylly!");
                        } catch (error) {
                            notyf.error(
                                "Something went wrong please try again!"
                            );
                            console.log(error);
                        }
                    }
                );
            }
        );
    };

    return (
        <main className="add-notice">
            <div className="head-title">
                <div className="left">
                    <h1>Add New Notice</h1>
                </div>
            </div>

            <form className="form-content">
                <div>
                    <label>
                        Notice Title <span>*</span>
                    </label>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter notice title"
                            required
                            className="input-field"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div>
                    <label>Notice Description</label>
                    <div className="input-wrapper textarea">
                        <textarea
                            onChange={handleChange}
                            name="description"
                            placeholder="Enter notice description"
                        ></textarea>
                    </div>
                </div>

                <div>
                    <label>
                        Upload Image <span>*</span>
                    </label>
                    <div className="input-wrapper">
                        <input
                            type="file"
                            name="imageUrl"
                            placeholder="Upload Image"
                            required
                            className="uploadImage"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                    {progress > 0 && (
                        <p style={{ marginTop: "3px" }}>
                            Uploading {progress}% done
                        </p>
                    )}
                </div>

                <button
                    onClick={handleClick}
                    className="btn-primary submit_btn"
                >
                    Submit
                </button>
            </form>
        </main>
    );
};

export default AddNotice;
