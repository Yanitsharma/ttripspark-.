import React, { useEffect, useState } from "react";
import BookingForm from "../../AdvanceSearch/BookTrip/BookingForm";

import {
  Container,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../Header/header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
const [showForm, setShowForm] = useState(false);

const handleOpenForm = () => setShowForm(true);
const handleCloseForm = () => setShowForm(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  
  const isSticky = () => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 120
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  const handleGalleryClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const galleryEl = document.getElementById("gallery");
        if (galleryEl) {
          galleryEl.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); 
    } else {
      const galleryEl = document.getElementById("gallery");
      if (galleryEl) {
        galleryEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };


  return (
    <header className="header-section">
      <Container>
        <Navbar expand="lg" className="p-0">
          {/* Logo */}
          <Navbar.Brand>
  <NavLink to="/" className="d-flex align-items-center text-decoration-none">
    <div className="logo-container">
      <img
        src="/logo.png"
        alt="TripSpark Logo"
        className="logo-img"
      />
    </div>
    <span className="brand-name">TripSpark</span>
  </NavLink>
</Navbar.Brand>
          {/* Offcanvas for Mobile */}
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="start"
            show={open}
          >
            <Offcanvas.Header>
              <h1 className="logo">TripSpark</h1>
              <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                <i className="bi bi-x-lg"></i>
              </span>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className="nav-link" to="/" >
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/" >
                  ABOUT US
                </NavLink>
                <NavLink className="nav-link" to="/" >
                  TOURS
                </NavLink>
                <NavDropdown
                  title="DESTINATION"
                  id="offcanvasNavbarDropdown-expand-lg"
                >
                  <NavLink
                    className="nav-link text-dark"
                    to="/"
      
                  >
                    SPAIN TOURS
                  </NavLink>
                </NavDropdown>

                <span
                  className="nav-link gallery-link"
                  role="button"
                  onClick={handleGalleryClick}
                >
                  GALLERY
                </span>

                <NavLink className="nav-link" to="/" >
                  CONTACT
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          
         <div className="ms-md-4 ms-2">
             <button className="primaryBtn d-none d-sm-inline-block" onClick={handleOpenForm}>
  Book Now
</button>
{showForm && <BookingForm onClose={handleCloseForm} />}
              <li className="d-inline-block d-lg-none ms-3 toggle_btn">
                <i className={open ? "bi bi-x-lg" : "bi bi-list"}  onClick={toggleMenu}></i>
              </li>
            </div>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;