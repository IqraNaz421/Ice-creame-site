// import React from 'react'
// import { FaUser } from "react-icons/fa6";
// import { IoMailSharp } from "react-icons/io5";
// import { FaPhone } from "react-icons/fa";
// import "../css-files/contact.css"

// const Contact = () => {
//   return (
//     <section className="contact-us">
//       <h2 className="section-title">
//         <span className='contact-title'>CONTACT</span>
//         <span className='us-title'>US</span>
//       </h2>

//       <div className='contact-form'>
//         <h3 className='contact-subtitle'>GET IN TOUCH</h3>

//         <div className='input-container'>
//           <FaUser className='input-icon' />
//           <input type="text" placeholder='Name' className='input-field' /> 
//         </div>

//         <div className='input-container'>
//           <IoMailSharp className='input-icon' />
//           <input type="text" placeholder='Email' className='input-field' />
//         </div>

//         <div className='input-container'>
//           <FaPhone className='input-icon' />
//           <input type="text" placeholder='Mobile Number' className='input-field' />
//         </div>

//         <button className='contact-button'>Send Message</button>
//       </div>
//     </section>
//   )
// }

// export default Contact

















// Contact.js
import React from 'react';
import { FaUser, FaPhone } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import "../css-files/contact.css";

const Contact = () => {
  return (
    <section className="contact-us">
      <h2 className="section-title">
        <span className="contact-title underline">CONTACT Us  </span> 
        {/* <span className="us-title">US</span> */}
      </h2>

      <div className="contact-form">
        <h3 className="contact-subtitle">GET IN TOUCH</h3>

        <div className="input-container">
          <FaUser className="input-icon" />
          <input type="text" placeholder="Name" className="input-field" />
        </div>

        <div className="input-container">
          <IoMailSharp className="input-icon" />
          <input type="email" placeholder="Email" className="input-field" />
        </div>

        <div className="input-container">
          <FaPhone className="input-icon" />
          <input type="text" placeholder="Mobile Number" className="input-field" />
        </div>

        <button className="contact-button">Send Message</button>
      </div>
    </section>
  );
};

export default Contact;
