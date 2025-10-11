
import React, { useState } from 'react'
import { Col, Row, Offcanvas, Button, InputGroup, Form, Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { BiUser } from 'react-icons/bi'
import { IoIosHeartEmpty } from 'react-icons/io'
import { PiHandbag } from "react-icons/pi";
import { CgMenuLeft } from "react-icons/cg";
import { FiInstagram } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillYoutube } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FiTruck } from 'react-icons/fi'
import { GiReturnArrow } from 'react-icons/gi'
import { FaRupeeSign } from 'react-icons/fa'
import { RiSecurePaymentFill } from 'react-icons/ri'
import './NavbarMain.css'
const NavbarMain = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const dropdownData = [{ title: "Men", items: [{ label: "Shoes", path: "/" }, { label: "Sandals", path: "/" }, { label: "Loafers", path: "/" }, { label: "Sneakers", path: "/" }, { label: "Slides", path: "/" }, { label: "Chappals", path: "/" }, { label: "Flip Flops", path: "/" },] }, { title: "Women", items: [{ label: "Shoes", path: "/" }, { label: "Sandals", path: "/" }, { label: "Loafers", path: "/" }, { label: "Sneakers", path: "/" }, { label: "Slides", path: "/" }, { label: "Chappals", path: "/" }, { label: "Flip Flops", path: "/" },] }, { title: "Kids", items: [{ label: "Shoes", path: "/" }, { label: "Sandals", path: "/" }, { label: "Loafers", path: "/" }, { label: "Sneakers", path: "/" }, { label: "Slides", path: "/" }, { label: "Chappals", path: "/" }, { label: "Flip Flops", path: "/" },] }, { title: "Brand", items: [{ label: "Lexa", path: "/" }, { label: "Campus", path: "/" }, { label: "Skeroo", path: "/" }, { label: "ADDA", path: "/" }, { label: "Abros", path: "/" }, { label: "Walkaroo", path: "/" }, { label: "Feet 4 Ever", path: "/" }, { label: "Kids Lounge", path: "/" }, { label: "Red Tape", path: "/" },] }, { title: "Sale", items: [{ label: "Under 999", path: "/" }, { label: "Under 1499", path: "/" }, { label: "Under 1999", path: "/" }, { label: "Pre Festive Deal", path: "/" },] },];
    return (
        <>
            <Navbar expand="lg" sticky="top" className="main-navbar border-0 m-0 px-2 py-0 border">
                <Container fluid className="d-flex align-items-center justify-content-between">
                    {/* NAV BAR MAIN */}
                    <div className="d-flex align-items-center justify-content-start col-4">
                        <div className='d-flex justify-content-start d-block d-lg-none'>
                            <CgMenuLeft className="fs-2 social-text" style={{ cursor: 'pointer' }} onClick={() => setIsOpen(true)} />
                        </div>
                        <Navbar.Collapse id="basic-navbar-nav" className="m-0 px-0 py-0">
                            <Nav className="d-flex align-items-center menu-text">
                                {dropdownData.map((menu, index) => (
                                    <NavDropdown key={index} title={<span className={`${menu.title === "Sale" ? "text-white" : ""}`}>{menu.title}</span>} id={`nav-dropdown-${index}`} className="dropdown-container menu-sub-text custom-dropdown p-0 px-2 py-0 m-0" show={openDropdown === index} onMouseEnter={() => setOpenDropdown(index)} onMouseLeave={() => setOpenDropdown(null)}>
                                        {menu.items.map((item, itemIndex) => (
                                            <Link key={itemIndex} to={item.path} className="dropdown-item sub-text px-3 py-2">{item.label}</Link>
                                        ))}
                                    </NavDropdown>
                                ))}
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                    {/* BRAND NAME LOGO LINK */}
                    <div className="d-flex justify-content-center align-items-center col-4 text-center ">
                        <Navbar.Brand className="m-0 px-0 py-0">
                            <Link to="/" className="main-logo text-decoration-none">Humique</Link>
                        </Navbar.Brand>
                    </div>
                    {/* LOGIN WISHLIST SEARCH CART */}
                    <div className="d-flex align-items-center justify-content-end col-4 icon-col">
                        <div className="search-container d-flex align-items-center d-none d-lg-block">
                            <IoSearchOutline className="fs-4 mx-2 social-text" />
                            <input type="text" className="search-input social-text" placeholder="Search for products..." style={{ backgroundColor: "transparent", color: "#fff" }} />
                        </div>
                        <BiUser className="fs-4 mx-2 social-text" />
                        <IoIosHeartEmpty className="fs-4 mx-2 social-text" />
                        <div className="position-relative text-center">
                            <PiHandbag className="fs-4 mx-2 social-text" />
                        </div>
                    </div>
                    <div className="m-0 p-1 d-flex align-items-center justify-content-center col-12 d-block d-lg-none  icon-col">
                        <div className="search-container-mobile w-100 d-flex align-items-center ">
                            <IoSearchOutline className="fs-1 me-2 social-text" />
                            <input type="text" className="search-input-mobile social-text" placeholder="Search for products..." style={{ backgroundColor: "white", color: "black" }} />
                        </div>
                    </div>
                </Container>
            </Navbar>

            {/* 📱 OFFCANVAS MENU (MOBILE) */}
            <Offcanvas show={isOpen} onHide={() => setIsOpen(false)} placement="start" className="offcanvas-menu offcanvas-container m-0 p-0">
                <Offcanvas.Header closeButton className='pe-4 pt-3 pb-0 me-2'>
                    <Offcanvas.Title className="main-logo text-dark px-2">Humique</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <ul className="list-unstyled m-0 p-0">
                            {dropdownData.map((menu, index) => (
                                <li key={index} className="mb-2 border">
                                    <div className="d-flex justify-content-between align-items-center py-2 px-2 offcanvas-menu-title" style={{ cursor: "pointer" }} onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
                                        <span className='px-2'>{menu.title}</span>
                                        <span className="fs-5 px-2">{activeIndex === index ? "-" : "+"}</span>
                                    </div>
                                    {/* Sub-items */}
                                    {activeIndex === index && (
                                        <ul className="list-unstyled m-0 p-0 " style={{ backgroundColor: "#f9f9f9" }}>
                                            {menu.items.map((item, i) => (
                                                <li key={i} className="px-3 py-2 m-0 offlitext" >
                                                    <Link to={item.path} className="text-decoration-none offcanvas-link" onClick={() => setIsOpen(false)}>{item.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </Nav>
                    <Row className='my-2 py-2'>
                        <Col className='offcanvas-utils text-center'>
                            <IoIosHeartEmpty className='fs-4 mb-2'/>
                            <p className='p-0 m-0'>My Wishlist</p>
                        </Col>
                        <Col className='offcanvas-utils text-center'>
                            <PiHandbag className='fs-4 mb-2'/>
                            <p className='p-0 m-0'>My Cart</p>
                        </Col>
                        <Col className='offcanvas-utils text-center'>
                            <BiUser className='fs-4 mb-2'/>
                            <p className='p-0 m-0'>My Account</p>
                        </Col>
                    </Row>

                    <div className='bg-white'>
                        <p className='px-2' style={{fontFamily:"Poppins", fontSize:"13.5px", fontWeight:"500",cursor:"pointer"}}>Contact Us</p>
                        <p className='px-2' style={{fontFamily:"Poppins", fontSize:"13.5px", fontWeight:"500",cursor:"pointer"}}>Humique's Story</p>
                        <p className='px-2' style={{fontFamily:"Poppins", fontSize:"13.5px", fontWeight:"500", cursor:"pointer"}}>Log In</p>
                    </div>
                    <div className='text-center m-0 mt-2 p-0'>
                        <p className='m-0 p-0 brand-collection'>Get in Touch</p>
                    </div>

                    <div className='d-flex flex-wrap m-0 p-0 px-5 mt-2'>
                        <div className="col-3 m-0 p-2  d-flex justify-content-center align-items-center">
                            <FiInstagram className='social-icon social-instagram'/>
                        </div>
                        <div className="col-3 m-0 p-2  d-flex justify-content-center align-items-center">
                            <FaFacebookF className='social-icon social-facebook'/>
                        </div>
                        <div className="col-3 m-0 p-2  d-flex justify-content-center align-items-center">
                            <AiFillYoutube className='social-icon social-youtube'/>
                        </div>
                        <div className="col-3 m-0 p-2  d-flex justify-content-center align-items-center">
                            <IoLogoWhatsapp className='social-icon social-whatsapp '/>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
export default NavbarMain