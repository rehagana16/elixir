import React, { useState } from 'react'

const Registration = () => {
    const [registration, setRegistration] = useState({
        first_name: "",
        last_name: "",
        Password: "",
        Email: ""
    })


    return (
        <div class="flex items-center justify-center min-h-screen bg-gray-100">
            <div class="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
                <div class="flex justify-center">
                    <img class="mx-auto h-36 w-auto bg-transparent" src="logo-elixir.jpg" alt="Workflow" />
                </div>
                <h2 class="text-center text-2xl font-extrabold text-gray-900">Sign in to your account</h2>
                <form action="">
                    <div class="mt-4">
                        <div>
                            <label class="block" for="Name">First Name</label>
                            <input type="text" name='firstname' placeholder="Firstname"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className='mt-4'>
                            <label class="block" for="Name">Last Name</label>
                            <input type="text" name='lastname' placeholder="Lastname"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="mt-4">
                            <label class="block" for="email">Email</label>
                            <input type="text" name="email" placeholder="Email"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="mt-4">
                            <label class="block">Password</label>
                            <input type="password" name="password" placeholder="Password"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="mt-4">
                            <label class="block">Confirm Password</label>
                            <input type="password" placeholder="Password"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <span class="text-xs text-red-400">Password must be same!</span>
                        <div class="flex">
                            <button class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Create
                                Account</button>
                        </div>
                        <div class="mt-6 text-grey-dark">
                            Already have an account?
                            <a class="text-blue-600 hover:underline" href="#">
                                Log in
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration