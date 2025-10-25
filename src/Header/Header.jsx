import { GiRunningShoe } from 'react-icons/gi'
import { IoLocationSharp } from 'react-icons/io5'
import './Header.css'
import Slider from "react-slick";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
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
      <div className='main-head d-flex'>
          <div className="col-4 d-none d-lg-block justify-content-start align-items-center px-4">
            <p className="p-0 m-0 d-flex align-items-center text-white">
              <GiRunningShoe className="fs-5 me-2" />
              WELCOME TO MEMON SONS
            </p>
          </div>
        <div className="col-12 col-lg-4">
          <Slider {...settings} >
            <div className='m-0 p-0'><p className='m-0 p-2 top-pill-text' style={{cursor:"pointer"}}>Diwali Week Deal 🔥 : 20% OFF on all orders.</p></div>
            <div className='m-0 p-0'><p className='m-0 p-2 top-pill-text' style={{cursor:"pointer"}}>Celebrate love, save big. ✨ Hurry, offer ends soon!</p></div>
            <div className='m-0 p-0'><p className='m-0 p-2 top-pill-text' style={{cursor:"pointer"}}>🔥 Hot Seller Alert ! Don’t miss our top-rated picks!</p></div>
            <div className='m-0 p-0'><p className='m-0 p-2 top-pill-text' style={{cursor:"pointer"}}>Your order ships FREE! Just spend ₹999/-.</p></div>
            <div className='m-0 p-0'><p className='m-0 p-2 top-pill-text' style={{cursor:"pointer"}}>🎉Weekend Special ! Buy 2, Get 1 FREE on select items!</p></div>
            <div className='m-0 p-0'><p className='m-0 p-2 top-pill-text' style={{cursor:"pointer"}}>Start Your Journey with Us 🔥 Special Offer Inside!</p></div>
          </Slider>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center px-4 d-none d-lg-flex">
          <p className="p-0 m-0 d-flex align-items-center text-white "><IoLocationSharp className="fs-6 me-2" />Find a Store</p>
        </div>
      </div>
      <NavbarMain />
    </>
  )
}
export default Header