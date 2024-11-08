

import React from 'react'
import Image from "next/image"
import "../css-files/menu.css"

const Menu = () => {
    return (
        <section className='menu'>
            <h2>
                <span className='first-word underline'>Our</span>
                <span className='second-word underline'>Menu</span>
            </h2>

            <div className='menu-container'>
                <div className='menu-item'>
                    <Image src="/images/m1.jpg" alt="menu1" width={200} height={200} />
                    <p className="font-extrabold">Vanila Crunch</p>
                    <p className='menu-description'>A crunchy vanilla flavored dessert with a sweet touch</p>
                    <div className='price-container'>
                        <span className='current-price  bg-red-500 px-3 rounded-lg animate-pulse'>$40.00</span>
                        <span className='cut-price'>$50.00</span>
                    </div>
                    <button>Add to Cart</button>
                </div>

                <div className='menu-item'>
                    <Image src="/images/m2.jpg" alt="menu2" width={200} height={200} />
                    <p className="font-extrabold">Cheese Strawberry</p>
                    <p className='menu-description'>A delicious creamy cheese and sweet strawberries</p>
                    <div className='price-container'>
                        <span className='current-price bg-red-500 px-3 rounded-lg animate-pulse'> $40.00</span>
                        <span className='cut-price'>$50.00</span>
                    </div>
                    <button>Add to Cart</button>
                </div>

                <div className='menu-item'>
                    <Image src="/images/m7.webp" alt="menu3" width={200} height={200} />
                    <p className="font-extrabold">Butter Scotch</p>
                    <p className='menu-description'>A rich and creamy butter scotch treat</p>
                    <div className='price-container'>
                        <span className='current-price  bg-red-500 px-3 rounded-lg animate-pulse'>$40.00</span>
                        <span className='cut-price'>$50.00</span>
                    </div>
                    <button>Add to Cart</button>
                </div>

                <div className='menu-item'>
                    <Image src="/images/m4.jpg" alt="menu4" width={200} height={200} />
                    <p className="font-extrabold">Blueberry</p>
                    <p className='menu-description'>Fresh blueberries blended into a creamy</p>
                    <div className='price-container'>
                        <span className='current-price  bg-red-500 px-3 rounded-lg animate-pulse'>$40.00</span>
                        <span className='cut-price'>$50.00</span>
                    </div>
                    <button>Add to Cart</button>
                </div>

                <div className='menu-item'>
                    <Image src="/images/m5.jpg" alt="menu5" width={200} height={200} />
                    <p className="font-extrabold">Creamy Bite</p>
                    <p className='menu-description'>A smooth creamy dessert that melts in your mouth</p>
                    <div className='price-container'>
                        <span className='current-price  bg-red-500 px-3 rounded-lg animate-pulse'>$40.00</span>
                        <span className='cut-price'>$50.00</span>
                    </div>
                    <button>Add to Cart</button>
                </div>

                <div className='menu-item'>
                    <Image src="/images/a5.webp" alt="menu6" width={200} height={200} />
                    <p className="font-extrabold">Candy Crunch</p>
                    <p className='menu-description'>A crunchy dessert mix of candy pieces</p>
                    <div className='price-container'>
                        <span className='current-price  bg-red-500 px-3 rounded-lg animate-pulse'>$40.00</span>
                        <span className='cut-price'>$50.00</span>
                    </div>
                    <button>Add to Cart</button>
                </div>

                <div className='menu-item'>
                    <Image src="/images/a4.jpg" alt="menu7" width={200} height={200} />
                    <p className="font-extrabold">Chocolate Delight</p>
                    <p className='menu-description'>Rich decadent chocolate dessert </p>
                    <div className='price-container'>
                        <span className='current-price  bg-red-500 px-3 rounded-lg animate-pulse'>$45.00</span>
                        <span className='cut-price'>$55.00</span>
                    </div>
                    <button>Add to Cart</button>
                </div>

                <div className='menu-item'>
                    <Image src="/images/a3.webp" alt="menu8" width={200} height={200} />
                    <p className="font-extrabold">Minty Fresh</p>
                    <p className='menu-description'>A refreshing mint flavor with a cool finish</p>
                    <div className='price-container'>
                        <span className='current-price  bg-red-500 px-3 rounded-lg animate-pulse'>$42.00</span>
                        <span className='cut-price'>$52.00</span>
                    </div>
                    <button>Add to Cart</button>
                </div>

                <div className='menu-item'>
                    <Image src="/images/a2.jpg" alt="menu9" width={200} height={200} />
                    <p className="font-extrabold">Caramel Swirl</p>
                    <p className='menu-description'>A sweet and smooth caramel dessert </p>
                    <div className='price-container'>
                        <span className='current-price  bg-red-500 px-3 rounded-lg animate-pulse'>$38.00</span>
                        <span className='cut-price'>$48.00</span>
                    </div>
                    <button>Add to Cart</button>
                </div>

                <div className='menu-item'>
                    <Image src="/images/a1.webp" alt="menu10" width={200} height={200} />
                    <p className="font-extrabold">Peach Fusion</p>
                    <p className='menu-description'>A perfect blend of juicy peaches</p>
                    <div className='price-container'>
                        <span className='current-price bg-red-500 px-3 rounded-lg animate-pulse'>$43.00</span>
                        <span className='cut-price'>$53.00</span>
                    </div>
                    <button>Add to Cart</button>
                </div>

               
               </div> 
        </section>
    )
}

export default Menu
