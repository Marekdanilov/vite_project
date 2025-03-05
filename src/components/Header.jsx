import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className='bg-gray-400 sticky top-0'>
                <div className='text-xl  font-semibold'>Header:</div>
                <div className='text-blue-600 space-x-2'>
                    <Link to='/'>Home</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/About'>About</Link>
                </div>
            </div>
        </>
    )
}

export default Header