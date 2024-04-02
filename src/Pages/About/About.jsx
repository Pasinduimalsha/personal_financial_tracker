import React from 'react'
import styled from 'styled-components'
import img1 from '../About/image/pic01.jpg'
import img2 from '../About/image/pic02.jpg'
import img3 from '../About/image/pic03.jpg'




const About = () => {
  return (
    <AboutStyle className='sm:px-12 sm:ml-3  md:px-[120px] px-5 pr-1 pb-[120px] pt-[100px] w-full h-screen overflow-y-scroll z-0 relative bg-[#12372A]'>
    <div>
        <div className="wrapper">

<div className="title">
    <h4>Our Team Section</h4>
</div>

<div className="card_Container">

    <div className="card">

        <div className="imbBx">
            <img src={img1} alt=""/>
        </div>

        <div className="content">
            <div className="contentBx">
                <h3>James Henry <br/><span>Web Analyst</span></h3>
            </div>
            <ul className="sci">
                {/* <li style="--i: 1">
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </li>
                <li style="--i: 2">
                    <a href="#"><i className="fa-brands fa-github"></i></a>
                </li>
                <li style="--i: 3">
                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                </li> */}
            </ul>
        </div>

    </div>

    <div className="card">

        <div className="imbBx">
            <img src={img2} alt=""/>
        </div>

        <div className="content">
            <div className="contentBx">
                <h3>John Doe <br/><span>UI/UX Designer</span></h3>
            </div>
            <ul className="sci">
                {/* <li style="--i: 1">
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </li>
                <li style="--i: 2">
                    <a href="#"><i className="fa-brands fa-github"></i></a>
                </li>
                <li style="--i: 3">
                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                </li> */}
            </ul>
        </div>

    </div>

    <div className="card">

        <div className="imbBx">
            <img src={img3} alt=""/>
        </div>

        <div className="content">
            <div className="contentBx">
                <h3>Mykel Smith <br/><span>Front-End Web Developer</span></h3>
            </div>
            <ul className="sci">
                {/* <li style="--i: 1">
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </li>
                <li style="--i: 2">
                    <a href="#"><i className="fa-brands fa-github"></i></a>
                </li>
                <li style="--i: 3">
                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                </li> */}
            </ul>
        </div>

    </div>

   
</div>

</div>


    </div>
    </AboutStyle>
  )
}

export default About

const AboutStyle = styled.div`
   /* @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"); */

/* *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #cbc9e8; */
/* } */

.wrapper .title{
    text-align: center;
}

.title h4{
    display: inline-block;
    padding: 20px;
    color: #585757;
    font-size: 50px;
    font-weight: 500;
    letter-spacing: 1.2px;
    word-spacing: 5px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    text-transform: uppercase;
    backdrop-filter: blur(15px);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    word-wrap: break-word;
}

.wrapper .card_Container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 40px 0;
}

.card_Container .card{
    position: relative;
    width: 300px;
    height: 400px;
    margin: 20px;
    overflow: hidden;
    box-shadow: 0 30px 30px -20px rgba(0, 0, 0, 1),
                inset 0 0 0 1000px rgba(67, 52, 109, .6);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card .imbBx, .imbBx img{
    width: 100%;
    height: 100%;
}

.card .content{
    position: absolute;
    bottom: -160px;
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    backdrop-filter: blur(15px);
    box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    transition: bottom 0.5s;
    transition-delay: 0.65s;
}

.card:hover .content{
    bottom: 0;
    transition-delay: 0s;
}

.content .contentBx h3{
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    margin: 20px 0 15px;
    line-height: 1.1em;
    transition: 0.5s;
    transition-delay: 0.6s;
    opacity: 0;
    transform: translateY(-20px);
}

.card:hover .content .contentBx h3{
    opacity: 1;
    transform: translateY(0);
}

.content .contentBx h3 span{
    font-size: 12px;
    font-weight: 300;
    text-transform: initial;
}

.content .sci{
    position: relative;
    bottom: 10px;
    display: flex;
}

.content .sci li{
    list-style: none;
    margin: 0 10px;
    transform: translateY(40px);
    transition: 0.5s;
    opacity: 0;
    transition-delay: calc(0.2s * var(--i));
}

.card:hover .content .sci li{
    transform: translateY(0);
    opacity: 1;
}

.content .sci li a{
    color: #fff;
    font-size: 24px;
}

`;

