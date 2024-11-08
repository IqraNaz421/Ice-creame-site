"use client"
import React, { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { IoCartOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import "../css-files/header.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false)
  };

  return (
    <header className='header'>
      <div className='logo'>
        <Image src="/images/l3.jpg" className='rounded-full animate-spin' alt='coffee shop logo' width={70} height={70} objectFit='cover' />
      </div>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul className='nav-list'>
          <li><Link className='text-pink-400' href={"/"} onClick={closeMenu}>Home</Link></li>
          <li><Link href={"/about"} onClick={closeMenu}>About</Link></li>
          <li><Link href={"/menu"} onClick={closeMenu}>Menu</Link></li>
          <li><Link href={"/blogs"} onClick={closeMenu}>Blogs</Link></li>
          <li><Link href={"/clients"} onClick={closeMenu}>Client Reviews</Link></li>
          <li><Link href={"/contact"} onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>

      {/* hamburger icon */}
      <div className='hamburger' onClick={toggleMenu}>
        {menuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
      </div>

      <div>
        <IoCartOutline className='icon' />
      </div>
    </header>
  )
}
export default Header