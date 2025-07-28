import React, { useEffect, useState } from "react";
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

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  // Sticky Header
  const isSticky = () => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 120
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  // Scroll to gallery
  const handleGalleryClick = () => {
    setOpen(false); // close offcanvas if open
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const galleryEl = document.getElementById("gallery");
        if (galleryEl) {
          galleryEl.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // wait for navigation and Home component to render
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
            <NavLink to="/">TripSpark</NavLink>
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
                <NavLink className="nav-link" to="/" onClick={toggleMenu}>
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/" onClick={toggleMenu}>
                  ABOUT US
                </NavLink>
                <NavLink className="nav-link" to="/" onClick={toggleMenu}>
                  TOURS
                </NavLink>
                <NavDropdown
                  title="DESTINATION"
                  id="offcanvasNavbarDropdown-expand-lg"
                >
                  <NavLink
                    className="nav-link text-dark"
                    to="/"
                    onClick={toggleMenu}
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

                <NavLink className="nav-link" to="/" onClick={toggleMenu}>
                  CONTACT
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <div className="ms-md-4 ms-2">
            <NavLink className="primaryBtn d-none d-sm-inline-block">
              Book Now
            </NavLink>
            <li className="d-inline-block d-lg-none ms-3 toggle_btn">
              <i
                className={open ? "bi bi-x-lg" : "bi bi-list"}
                onClick={toggleMenu}
              ></i>
            </li>
          </div>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
