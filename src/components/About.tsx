

import React from 'react';
import "../css-files/about.css";
import Image from 'next/image';
import { FaIceCream, FaSmile, FaLeaf, FaHeart } from 'react-icons/fa';

const About: React.FC = () => {
    return (
        <section className="aboutUs">
            <div className="imageContainer">
                <Image
                    src="/images/again.webp" 
                    alt="Ice Cream Shop" 
                    width={500}
                    height={500}
                    className="image"
                />
            </div>
            <div className="content">
                <h2 className='underline'>About Us</h2>
                <p>
                    We are dedicated to creating unforgettable ice cream experiences Each scoop brings joy with flavors crafted from the finest ingredients
                </p>
                <ul className="featuresList">
                    <li><FaIceCream className="icon" /> Unique flavors around the world</li>
                    <li><FaSmile className="icon" /> Happiness in every little scoop</li>
                    <li><FaLeaf className="icon" /> Made with natural and fresh ingredients</li>
                    <li><FaHeart className="icon" /> Passionate about quality and taste</li>
                </ul>
            </div>
        </section>
    );
};

export default About;
