import React from 'react'
import styled from 'styled-components'
// import img1 from '../Contact/p01.jpg'
import {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export const Contact = () => {
//     const form = useRef();

//   const sendEmail = (e) => {
  

//     e.preventDefault();

//     emailjs
//         .sendForm('service_kpsx87r', 'template_zd28jdo', form.current, {
//             publicKey: 'mlDGk6f8IsXDFslHd',
//         })
//         .then(
//             () => {
//                 console.log('SUCCESS!');
//             },
//             (error) => {
//                 console.log('FAILED...', error.text);
//             },
//         );
//     e.target.reset();
//   };

const [FirstName,setFirstName] = useState('');
const [LastName,setLastName] = useState('');
const [Email,setEmail] = useState('');
const [Mobile,setMobile] = useState('');
const [Message,setMessage] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = 'service_kpsx87r';
    const templateID = 'template_zd28jdo';
    const publicKey = 'mlDGk6f8IsXDFslHd';

   const templateParams = {
    FirstName: FirstName,
    LastName: LastName,
    Email: Email,
    Mobile: Mobile,
    Message: Message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
    })
    .catch((error) => {
        console.log('FAILED...', error);
    });
    e.target.reset();
    setFirstName('');
    setLastName('');
    setEmail('');
    setMobile('');
    setMessage('');
   }
   
 
  return (
    <ContactStyled onSubmit={handleSubmit} className='sm:px-12 sm:ml-3  md:px-[120px] px-5 pr-1 pb-[120px]  w-full h-screen overflow-y-scroll z-0 relative md:mt-5 bg-[#12372A]'>
    <div className="container">
        <form>
            <h1>Contact Us Form</h1>
            <input 
            type="text" 
            id="firstName" 
            placeholder="First Name" 
            required 
            value={FirstName} 
            onChange={(e) => setFirstName(e.target.value)}/>
             <input 
            type="text" 
            id="lastName" 
            placeholder="Last Name" 
            required 
            value={LastName} 
            onChange={(e) => setLastName(e.target.value)}/>
            <input 
            type="email" 
            id="email" 
            placeholder="Email" 
            required
            value={Email}
            onChange={(e) => setEmail(e.target.value)}/>
            <input 
            type="text" 
            id="mobile" 
            placeholder="Mobile" 
            required
            value={Mobile}
            onChange={(e) => setMobile(e.target.value)}/> 
            <h4>Type Your Message Here...</h4>
            <textarea 
            cols="30"
            rows="10"
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
            required
            />
            <input type="submit" value="Send" id="button"/>
        </form>
    </div>
    </ContactStyled>
  )
}

export default Contact

const ContactStyled = styled.div`

.container{ 

    min-height: 100vh;
    background: #12372A;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top:30px !important;
    
}

.container form{
    width: 670px;
    height: 400px;
    display: flex;
    justify-content: center;
    box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
    border-radius: 15px;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    flex-wrap: wrap;
}

.container form h1{
    color: #fff;
    font-weight: 500;
    margin-top: 20px;
    width: 500px;
    text-align: center;
}

.container form input{
    width: 290px;
    height: 40px;
    padding-left: 10px;
    outline: none;
    border: none;
    font-size: 15px;
    margin-bottom: 10px;
    background: none;
    border-bottom: 2px solid #fff;
}

.container form input::placeholder{
    color: #ddd;
}

.container form #lastName,
.container form #mobile{
    margin-left: 20px;
}

.container form h4{
    color: #fff;
    font-weight: 300;
    width: 600px;
    margin-top: 20px;
}

.container form textarea{
    background: none;
    border: none;
    border-bottom: 2px solid #fff;
    color: #fff;
    font-weight: 200;
    font-size: 15px;
    padding: 10px;
    outline: none;
    min-width: 600px;
    max-width: 600px;
    min-height: 80px;
    max-height: 80px;
}

textarea::-webkit-scrollbar{
    width: 1em;
}

textarea::-webkit-scrollbar-thumb{
    background-color: rgba(194,194,194,0.713);
}

.container form #button{
    border: none;
    background: #fff;
    border-radius: 5px;
    margin-top: 20px;
    font-weight: 600;
    font-size: 20px;
    color: #333;
    width: 100px;
    padding: 0;
    margin-right: 500px;
    margin-bottom: 30px;
    transition: 0.3s;
}

.container form #button:hover{
    opacity: 0.7;
}
`
;