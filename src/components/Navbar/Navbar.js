import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import CustomLink from '../CustomLink/CustomLink';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='bg-indigo-200'>
            <div onClick={()=>setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex bg-indigo-200 md:static w-full justify-center absolute duration-500 ease-in  ${open ? 'top-6' : 'top-[-120px]'}`}>
                <li className='mr-10'><CustomLink to="/home">Home</CustomLink></li>
                <li className='mr-10'><CustomLink to="/reviews">Reviews</CustomLink></li>
                <li className='mr-10'><CustomLink to="/dashboard">Dashboard</CustomLink></li>
                <li className='mr-10'><CustomLink to="/blogs">Blogs</CustomLink></li>
                <li className='mr-10'><CustomLink to="/about">About</CustomLink></li>
            </ul>
        </nav>
        
        
        
        
        
    );
};

export default Navbar;