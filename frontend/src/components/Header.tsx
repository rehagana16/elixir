import React, { SyntheticEvent } from 'react'

interface Props {
    firstName: string,
    setFirstName: (firstName: string) => void
}

const Header = ({ firstName, setFirstName }: Props) => {
    const logoutHandler = async (e: SyntheticEvent) => {
        e.preventDefault();
        await fetch('http://localhost:8080/api/logout', {
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        })
        setFirstName('')
    }
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div className="flex items-center flex-grow text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    <a href="/" className="font-semibold text-xl tracking-tight">Elixir</a>
                </div>
                <div className="w-full block flex-shrink-0 lg:flex lg:items-center lg:w-auto">
                    {firstName ? (
                        <div className="text-sm lg:flex-grow">
                            <a onClick={logoutHandler} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Logout
                            </a>
                        </div>
                    ) : (
                        <div className="text-sm lg:flex-grow">
                            <a href="/login" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Login
                            </a>
                            <a href="/register" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Register
                            </a>
                            <a href="/register/freelance" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                                Register as freelancer
                            </a>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Header