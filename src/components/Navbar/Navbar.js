import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='bg-indigo-200'>
            <div onClick={()=>setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex bg-indigo-200 md:static w-full justify-center absolute duration-500 ease-in  ${open ? 'top-6' : 'top-[-120px]'}`}>
                <li className='mr-10'><a href="/home">Home</a></li>
                <li className='mr-10'><a href="/reviews">Reviews</a></li>
                <li className='mr-10'><a href="/dashboard">Dashboard</a></li>
                <li className='mr-10'><a href="/blogs">Blogs</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;