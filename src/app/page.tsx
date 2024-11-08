import About from '@/components/About'
import Blogs from '@/components/Blogs'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import React from 'react'
import ClientReviews from '@/components/ClientReviews'

const page = () => {
  return (
    <div>
     
      <Hero/>
      <About/>
      <Menu/>
      <Blogs/>
      <ClientReviews/>
      <Contact/>
      
    </div>
  )
}

export default page
