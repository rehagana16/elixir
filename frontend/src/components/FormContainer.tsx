import React, { Children } from 'react'

interface Props {
    children: React.ReactNode
}

const FormContainer = ({ children }: Props) => {
    return (
        <div className='container mx-auto py-3'>
            <div className='md:justify-center'>
                {children}
            </div>
        </div>
    )
}

export default FormContainer