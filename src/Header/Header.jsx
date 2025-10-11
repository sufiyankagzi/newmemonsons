import React from 'react'
import './Header.css'
import Slider from "react-slick";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import {Container, Navbar} from 'react-bootstrap'
import NavbarMain from '../Components/NavbarMain';
const Header = () => {
  const NextArrow = ({ onClick }) => (
    <div className="head-custom-arrow next" onClick={onClick}>
      <SlArrowRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="head-custom-arrow prev" onClick={onClick}>
      <SlArrowLeft />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    vertical: true,            // 👈 Enable vertical sliding
  verticalSwiping: true, 
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className='main-head'>
        <Container fluid className='top-pill'>
        <Slider {...settings}>
          <div className='m-0 p-0'><p className='m-0 p-2 top-pill-text'>Diwali Week Deal 🔥 : 20% OFF on all orders.</p></div>
          <div className='m-0 p-0'><p className='m-0 p-2 top-pill-text '>Celebrate love, save big. ✨ Hurry, offer ends soon!</p></div>
          <div className='m-0 p-0'><p className='m-0 p-2 top-pill-text '>🔥 Hot Seller Alert ! Don’t miss our top-rated picks!</p></div>
          <div className='m-0 p-0'><p className='m-0 p-2 top-pill-text '>Your order ships FREE! Just spend ₹999/-.</p></div>
          <div className='m-0 p-0'><p className='m-0 p-2 top-pill-text '>🎉Weekend Special ! Buy 2, Get 1 FREE on select items!</p></div>
          <div className='m-0 p-0'><p className='m-0 p-2 top-pill-text '>Start Your Journey with Us 🔥 Special Offer Inside!</p></div>
        </Slider>
        </Container>
      </div>
      <NavbarMain/>
    </>
  )
}

export default Header