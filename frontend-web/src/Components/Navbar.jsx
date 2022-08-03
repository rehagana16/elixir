import React, { useContext } from "react";
import { useEffect } from "react";
import UserContext from "../UserContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate()
    const logoutHandler = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:8080/api/logout', {
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        })
            .then(() => {
                window.location.reload()
            })
    }
    const { user, getUser } = useContext(UserContext)
    useEffect(() => {
        (
            getUser
        )()
    }, [])
    return (
        <nav class="flex items-center justify-between flex-wrap bg-gray-100 pl-10 pr-16">
            <div class="flex items-center flex-shrink-0 text-white">
                <img src="logo-elixir.jpg" width="130" height="130"></img>
                <span class="text-black font-semibold text-m tracking-tight">Connecting People</span>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                </div>
                {!user ? (<div className="font-semibold">
                    <a href="login" class="block mt-4 lg:inline-block lg:mt-0 text-black mr-4">
                        Login
                    </a>
                    <a href="registration" class="block mt-4 lg:inline-block lg:mt-0 text-black mr-4">
                        Register
                    </a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black">
                        Register as freelance
                    </a>
                </div>) : (<div className="font-semibold">
                    <a onClick={logoutHandler} class="block mt-4 lg:inline-block lg:mt-0 text-black mr-4">
                        Logout
                    </a>
                </div>)}

            </div>
        </nav>
    )
}

export default Navbar;