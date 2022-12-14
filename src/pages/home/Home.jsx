import Hero from "../../components/hero/Hero";
import Notices from "../../components/notices/Notices";
import Header from "../../components/header/Header";
import BackToTop from "../../components/backtotop/BackToTop";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Notices />
            <Footer />
            <BackToTop />
        </>
    );
};

export default Home;
