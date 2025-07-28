import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import BookingForm from "../../AdvanceSearch/BookTrip/BookingForm";
import "../Header/header.css";

const Header = () => {

const [showForm, setShowForm] = useState(false);

const handleOpenForm = () => setShowForm(true);
const handleCloseForm = () => setShowForm(false);

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(()=>{
    window.addEventListener("scroll", isSticky);
    return ()=>{
      window.removeEventListener("scroll", isSticky)
    }
  })

  // sticky Header 
  const isSticky=(e)=>{
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 120 ? header.classList.add('is-sticky') :
    header.classList.remove('is-sticky')
  }


 

  return (
    
    <header className="header-section">
      <Container>
       
          <Navbar expand="lg" className="p-0">
            {/* Logo Section  */}
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

            {/* End Logo Section  */}

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
              show={open}
            >
              {/*mobile Logo Section  */}
              <Offcanvas.Header>
                <h1 className="logo">TripSpark</h1>
                <span className="navbar-toggler ms-auto"  onClick={toggleMenu}>
                  <i className="bi bi-x-lg"></i>
                </span>
              </Offcanvas.Header>
              {/*end mobile Logo Section  */}

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
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                   
                      
                    <NavLink className="nav-link text-dark" to="/" >
                    SPAIN TOURS
                  </NavLink>
                  
                   
                  </NavDropdown>
                  <NavLink className="nav-link" to="/" >
                    GALLERY
                  </NavLink>
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
