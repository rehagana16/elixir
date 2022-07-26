import React from 'react'

interface Props {
    firstName: string
}

const HomeScreen = ({ firstName }: Props) => {
    return (
        firstName ? <h1 className='text-3xl'>Welcome {firstName}!</h1> : <h1 className='text-3xl'>Welcome to the home page</h1>
    )
}

export default HomeScreen