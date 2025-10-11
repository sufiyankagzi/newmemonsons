import React from 'react';
import Slider from "react-slick";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../assets/img/Banner1.png';
import Img2 from '../assets/img/image2.png';
// import Img3 from '../assets/banner/image3.png';
// import Img4 from '../assets/banner/image4.png';
import './MainPageSlider.css';
// import NavbarMain from './NavbarMain';

const MainPageSlider = () => {
    const NextArrow = ({ onClick }) => (
        <div className="custom-arrow next" onClick={onClick}>
            <SlArrowRight />
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div className="custom-arrow prev" onClick={onClick}>
            <SlArrowLeft />
        </div>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="slider-wrapper">
           {/* <NavbarMain/> */}
            <Slider {...settings}>
                <div>
                    <div className="slide-container banner1" >
                        <img src={Img1} alt="Slide 1" className="slide-image" />
                    </div>
                </div>
                <div>
                    <div className="slide-container banner2">
                        <img src={Img2} alt="Slide 2" className="slide-image" />
                    </div>
                </div>
                
                
            </Slider>
        </div>
    );
};
export default MainPageSlider;
