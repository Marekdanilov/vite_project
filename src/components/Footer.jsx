import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='bg-gray-800 text-gray-50'>
                <div className='text-xl  font-semibold'>Footer:</div>
                <div className='text-blue-500 space-x-2'>
                    <Link to='/'>Home</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/About'>About</Link>
                </div>
            </div>
        </>
    )
}

export default Footer