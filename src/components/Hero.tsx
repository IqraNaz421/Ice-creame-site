

import React from 'react'
import Image from 'next/image'
import "../css-files/hero.css"
import Link from 'next/link'

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero-image'>
                <Image src="/images/ab.webp" alt="coffee beans" layout="fill" objectFit='cover' />
            </div>
            <div className='hero-content'>
                    <h2>Refreshing <br /> Ice Cream</h2>

             <p>Brighten your day with the perfect scoop of ice cream. Our expertly
                    </p>

                <button className='cta-button'>
                   <Link href="menu">Explore Now</Link> 
                </button>
            </div>
        </section>
    )
}

export default Hero;
