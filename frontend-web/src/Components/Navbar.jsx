import React from "react";

function Navbar() {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-gray-100 pl-10 pr-16">
            <div class="flex items-center flex-shrink-0 text-white">
                <img src="logo-elixir.jpg" width="130" height="130"></img>
                <span class="text-black font-semibold text-m tracking-tight">Connecting People</span>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                </div>
                <div>
                    <a href="login" class="block mt-4 lg:inline-block lg:mt-0 text-black mr-4">
                        Login
                    </a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black mr-4">
                        Register
                    </a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black">
                        Register as Freelancer
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;