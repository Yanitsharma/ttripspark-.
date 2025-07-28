import React, { useState } from "react";
import "../Footer/footer.css";
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
  }

  return (
    <>
      <footer className="pt-5">
        <Container>
          <Row>
            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0  ">
              <h4 className="mt-lg-0 mt-sm-3 co ">Company </h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <NavLink to="/" className={"co"}>
                    About Us
                  </NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/" className={"co"}>
                    News
                  </NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/" className={"co"}>
                    Faq
                  </NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0">
              <h4 className="mt-lg-0 mt-sm-3"  ClassName={"co"}>
                Explore{" "}
              </h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <NavLink to="/" className={"co"}>
                    {" "}
                    Faq
                  </NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/" className={"co"}>
                    Tour Listings
                  </NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/" className={"co"}>
                    {" "}
                    Destination
                  </NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0 ">
              <h4 className="mt-lg-0 mt-sm-3"   ClassName={"co"}>
                Quick Link{" "}
              </h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <NavLink to="/" className={"co"}>
                    {" "}
                    Home
                  </NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/" className={"co"}>
                    About Us{" "}
                  </NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/" className={"co"}>
                    {" "}
                    Contact Us{" "}
                  </NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md="3" sm="12" className="location mt-3 mt-md-0 ">
              <h4 className="mt-lg-0 mt-sm-3" ClassName={"mail"}>
                Contact Info{" "}
              </h4>

              <div className="d-flex align-items-center">
                <p className="pb-2" ClassName={"mail"}>
                  {" "}
                   UttarPradesh,India
                </p>
              </div>

              <div className="d-flex align-items-top my-2">
                <i className="bi bi-geo-alt me-3"></i>
                <a
                  target="_blank"
                  href="mailto:rawatcoder@gmail.com"
                  className="d-block mail"
                >
                 connect@afame.in
                </a>
              </div>
              <div className="d-flex align-items-top ">
                <i className="bi bi-telephone me-3"></i>
                <a
                  target="_blank"
                  href="tel:9876543210"
                  className="d-block mail"
                >
                 9450433876
                </a>
              </div>
            </Col>
          </Row>
          <Row className="py-2 bdr mt-3">
            <Col className="col copyright">
              <p className="text-light">
                {" "}
                @ 2025.Afame Technologies All rights reserved{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </footer>

      <div
        id="back-top"
        onClick={scrollTop}
        className={visible ? "active" : ""}
      >
        <i className="bi bi-arrow-up"></i>
      </div>
    </>
  );
};

export default Footer;
