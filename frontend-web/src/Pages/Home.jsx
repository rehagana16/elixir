import React from "react";
import Hero from "../Components/Hero";
import Rant from "../Components/Rant";
import Catalogue from "../Components/Catalogue";

function Home(props) {
    return (
        <div>
            <div className="flex flex-col h-screen">
                <Hero />
                <Rant firstName={props.firstName} />
            </div>
            <Catalogue />
        </div >
    )
}

export default Home;