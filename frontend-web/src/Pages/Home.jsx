import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Rant from "../Components/Rant";
import Catalogue from "../Components/Catalogue";

function Home() {
    return (
        <div>
            <div className="flex flex-col h-screen">
                <Navbar />
                <Hero />
                <Rant />
            </div>
            <Catalogue />
        </div >
    )
}

export default Home;