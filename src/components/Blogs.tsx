import React from 'react'
import Image from 'next/image'
import "../css-files/blogs.css"

const Blogs = () => {
    return (
        <section className='our-blogs-section'>
            <h2 className='section-title'>
                <span className='first-word underline'>OUR</span>
                <span className='second-word underline'>BLOGS</span>
            </h2>
            <div className='blogs-container'>
                <div className='blog-card'>
                    <Image src="/images/blog1.jpg" alt="coffeeblog2" className='blog-image' width={250} height={250} />
                    <h3 className='blog-title'>The Journey from Ingredients to Ice Cream Bliss</h3>
<p className='blog-author'>By John / 30th October 2024</p>
<p className='blog-description'>From selecting the bhdgyyd dkdkdkd finest cream to achieving the perfect consistency we take you through every step of creating ice cream that delivers an unforgettable taste Its a journey of passion precision and pure indulgence</p>

                    <button className='blog-button'>Explore More</button>
                </div>

                <div className='blog-card'>
                    <Image src="/images/b2.jpg" alt="coffeeblog2" className='blog-image' width={250} height={250} />
                    <h3 className='blog-title'>Unveiling the Art of Crafting Perfect Ice Cream</h3>
<p className='blog-author'>By Coplito / 30th October 2024</p>
<p className='blog-description'>Indulge in the delicate balance of ingredients that come together to form the perfect ice cream Whether its the creamy base or the intricate flavors we explore the art behind making ice cream thats not just a treat but a masterpiece</p>
                    <button className='blog-button'>Explore More</button>
                </div>

                <div className='blog-card'>
                    <Image src="/images/b3.webp" alt="coffeeblog2" className='blog-image' width={250} height={250} />
                    <h3 className='blog-title'>Why Perfect Ice Cream is More Than Just a Dessert</h3>
<p className='blog-author'>By Riyal / 30th October 2024</p>
<p className='blog-description'>Perfect ice cream is an experience that awakens the senses. Its about texture temperature and the harmony of flavors coming together to create a sensation of pure joy Lets uncover the reasons why this frozen delight is so much more than a mere dessert</p>
                    <button className='blog-button'>Explore More</button>
                </div>
            </div>
        </section>

    )
}

export default Blogs