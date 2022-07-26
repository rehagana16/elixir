import React from "react";

function Hero() {
    return (
        <div class="flex items-center justify-between flex-grow p-6 w-full h-auto relative" style={{ "backgroundColor": "#6b82b8" }}>
            <div class="flex items-center text-white mr-6 px-12">
                <div className="w-1/2">
                    <div className="mb-8 font-bold text-5xl tracking-tight">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus, elit et.
                    </div>
                    <button class="bg-transparent text-3xl text-white tracking-tight font-semibold py-4 px-6 border-2 border-white hover:border-transparent rounded-md">
                        Explore
                    </button>
                </div>
                <div className="w-1/2">
                    <img className="absolute bottom-0" src="person-removebg.png" width="50%"></img>
                </div>
            </div>
        </div>
    )
}

export default Hero;