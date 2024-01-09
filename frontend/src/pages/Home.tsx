// import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LandingPage } from "../components/LandingPage";

const Home = () => {
    return (
        <div className="container">
            <Header />
            <LandingPage />
            <Footer />
        </div>
    );
};

export default Home;
