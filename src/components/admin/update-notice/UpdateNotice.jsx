import { useState } from "react";

const UpdateNotice = ({ noticeData }) => {
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);

    return (
        <main>
            <div className="head-title">
                <div className="left">
                    <h1>Update Notice</h1>
                </div>
            </div>

            <div className="form">
                <div className="image-box">
                    <label>Notice Image</label>
                    <div className="image-input">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : noticeData.imageUrl
                            }
                            alt=""
                        />
                        <label className="upload-box" htmlFor="notice-image">
                            <ion-icon name="camera-reverse-outline"></ion-icon>
                        </label>
                        <input
                            id="notice-image"
                            type="file"
                            name="imageUrl"
                            style={{ display: "none" }}
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                </div>

                <div className="title-box">
                    <label>Notice Title</label>
                    <input
                        type="text"
                        name="title"
                        defaultValue={noticeData.title}
                    />
                </div>

                <div className="desc-box">
                    <label>Notice Description</label>
                    <textarea
                        name="description"
                        defaultValue={noticeData.description}
                    ></textarea>
                </div>

                <button className="btn-primary submit_btn">Update</button>
            </div>
        </main>
    );
};

export default UpdateNotice;
