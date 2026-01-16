import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Contact from "../ui/Contactui";

// Load environment variables
const developerName = import.meta.env.VITE_DEVELOPER_NAME;
const developerLink = import.meta.env.VITE_DEVELOPER_LINK;

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-purple-300 to-white py-12 px-4 sm:px-6 lg:px-8 font-serif">
      <Container className="max-w-7xl mx-auto">
        {/* Heading */}
        <Row className="justify-content-center text-center">
          <Col md={12}>
            <p className="text-3xl font-bold text-purple-900 mb-4">
              EMBRACE A HEALTHIER LIFE WITH YOGA
            </p>
            <p className="text-purple-700">
              "Balance your mind, strengthen your body, and nourish your soul.
              Begin your yoga journey with us today!"
            </p>
          </Col>
        </Row>

        {/* Contact Component */}
        <Row className="justify-content-center my-6">
          <Col md={12}>
            <Contact />
          </Col>
        </Row>

        {/* Additional Info */}
        <Row className="text-center my-6">
          <Col md={12}>
            <p className="text-purple-700">
              "Join us for guided sessions from expert yoga instructors and
              experience holistic wellness."
            </p>
          </Col>
        </Row>

        {/* Developer Credit */}
        <Row className="justify-content-center mt-8">
          <Col md={12} className="text-center">
            <p className="text-dark-700">
              Developed by{" "}
              <a
                href={developerLink}
                className="text-purple-600 hover:text-purple-900 transition-colors"
              >
                {developerName}
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;