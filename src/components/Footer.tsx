import React from 'react'
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import "../css-files/footer.css"

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className='social-links'>
                    <Link href="https://www.facebook.com/profile.php?id=100022188053240&mibextid=ZbWKwL"><FaFacebookF /></Link>
                    <Link href="https://www.instagram.com/iqranaz2968?igsh=MWsxMmJ0ZGZ6MHZhbg=="><FaInstagram /></Link>
                    <Link href="https://youtu.be/C4LBV38aqb0?si=_w3KV97DLO9zsFL2"><FaTwitter /></Link>
                    <Link href="https://www.linkedin.com/in/iqra-naz-43899b2b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></Link>
                    <Link href="https://github.com/IqraNaz421"><FaGithub /></Link>
                </div>

                <div className='footer-nav'>
                    <Link href="/">Home</Link>
                    <Link href="about">About</Link>
                    <Link href="menu">Menu</Link>
                    <Link href="blogs">Blogs</Link>
                    <Link href="contact">Contact</Link>
                </div>


                <p className='footer-text'>Created by <span className='name'><i>Iqra</i></span> | All Rights Reserved</p>
            </footer>
        </div>
    )
}

export default Footer