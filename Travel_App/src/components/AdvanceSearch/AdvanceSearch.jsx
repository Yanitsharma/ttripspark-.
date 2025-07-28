import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "../AdvanceSearch/search.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomDropdown from "../CustomDropdown/CustomDropdown";

const AdvanceSearch = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedGuest, setSelectedGuest] = useState("");

  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Static data for filtering (no server/API)
  const placesData = [
    {
      name: "Eiffel Tower, Paris",
      location: "Paris, France",
      guests: "2 adults, 1 children",
      img: "/img2.png",
    },
    {
      name: "Malaysia",
      location: "Malaysia",
      guests: "2 adults, 1 children",
      img: "/malaysia.png",
    },
    {
      name: "Tokyo City",
      location: "Tokyo, Japan",
      guests: "2 adults, 3 children",
      img: "/Tokyo.png",
    },
    {
      name: "Cancun, Mexico",
      location: "Cancun, Mexico",
      guests: "2 adults, 1 children",
      img: "/cancun.png",
    },
    {
      name: "Bangkok, Thailand",
      location: "Bangkok, Thailand",
      guests: "2 adults, 1 children",
      img: "/bangkok.png",
    },
  ];

  const handleLocation = (value) => {
    setSelectedLocation(value);
  };

  const handleGuest = (value) => {
    setSelectedGuest(value);
  };

  const handleSearch = () => {
    const filtered = placesData.filter((place) => {
      return (
        place.location === selectedLocation && place.guests === selectedGuest
      );
    });

    setResults(filtered);
    setShowResults(true);
  };

  return (
    <>
      <section className="box-search-advance">
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <div className="box-search shadow-sm">
                <div className="item-search">
                  <CustomDropdown
                    label="Location"
                    onSelect={handleLocation}
                    options={[
                      "Cancun, Mexico",
                      "Tokyo, Japan",
                      "Malaysia",
                      "Bangkok, Thailand",
                      "Paris, France",
                    ]}
                  />
                </div>
                <div className="item-search item-search-2">
                  <label className="item-search-label"> Check in </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd, MMMM, yyyy"
                  />
                </div>
                <div className="item-search item-search-2">
                  <label className="item-search-label"> Check Out </label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd, MMMM, yyyy"
                  />
                </div>
                <div className="item-search bd-none">
                  <CustomDropdown
                    label="Guest"
                    onSelect={handleGuest}
                    options={["2 adults, 1 children", "2 adults, 3 children"]}
                  />
                </div>
                <div className="item-search bd-none">
                  <Button
                    className="primaryBtn flex-even d-flex justify-content-center"
                    onClick={handleSearch}
                  >
                    <i className="bi bi-search me-2"></i> Search
                  </Button>
                </div>
              </div>
            </Col>
          </Row>

          {showResults && (
            <Row className="mt-4">
              {results.length === 0 ? (
                <Col>
                  <p>No results found. Try different filters.</p>
                </Col>
              ) : (
                results.map((item, index) => (
                  <Col key={index} md={4} className="mb-3">
                    <div className="search-result-card shadow-sm p-2">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="img-fluid rounded mb-2"
                      />
                      <h5 className="text-center">{item.name}</h5>
                    </div>
                  </Col>
                ))
              )}
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};

export default AdvanceSearch;

