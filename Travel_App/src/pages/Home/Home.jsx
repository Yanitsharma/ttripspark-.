import React from "react";
import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";
import { Container, Row, Col } from "react-bootstrap";
import Gallery from "../../components/Gallery/Gallery";
import { useState,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./home.css";

import Cards from "../../components/Cards/Cards";
import { getDestinationsData, getDestinationsData1 } from "../../utils/data";
import PopularCard from "../../components/Cards/PopularCard";
const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          infinite: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };
 const [destinations, setDestinations] = useState([]);
 const [destinations1, setDestinations1] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      // 2. Call the exported function to get the data
      const data = await getDestinationsData();
      const data2 = await getDestinationsData1();
      // 3. Set the data into your component's state
      setDestinations(data);
      setDestinations1(data2);
      setLoading(false);
    };

    loadData();
  }, []);
if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Banner />
      <Features />
      {/* Tours Section */}
      <section className="tours_section slick_slider">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1> Top Destination For Your Next Vacation </h1>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Slider {...settings}>
                {destinations.map((destination) => (
                  <Cards key={destination._id} destination={destination}  />
                ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Popular Section */}
      <section className="popular py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1> Popular Activities </h1>
              </div>
            </Col>
          </Row>
          <Row>
            {destinations1.map((val, index) => (
              <Col md={3} sm={6} xs={12} className="mb-5" key={index}>
                <PopularCard val={val} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="call_us">
        <Container>
          <Row className="align-items-center">
            <Col md="8">
              <h5 className="title">CALL TO ACTION</h5>
              <h2 className="heading">
                READY FOR UNFORGETTABLE TRAVEL. REMEMBER US!
              </h2>
              <p className="text">
              🌍 Travel Isn’t a Destination. It’s a Feeling.
And your next “wow” moment?
It’s somewhere no one’s been yet.
We’ll help you find it.
              </p>
            </Col>
            <Col md="4" className="text-center mt-3 mt-md-0">
              <a href="/" className="secondary_btn bounce">
                Contact Us!
              </a>
            </Col>
          </Row>
        </Container>
        <div className="overlay"></div>
      </section>

      <section className="gallery" id="gallery">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1>Photo Gallery</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Gallery />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
