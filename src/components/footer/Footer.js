import React from "react";
import { Col, Row } from "react-bootstrap";
import "./footer.css";
import Facebook from "../../icons/facebook (1).png";
import Instagram from "../../icons/instagram (1).png";
import Twitter from "../../icons/twitter (1).png";
const Footer = () => {
  return (
    <div className="container py-4">
      <Row className="row mt-5">
        <Col xs="12" sm="12" md="8" lg="4" className="footer-banner-section mt-4">
          <h3>Joob Seekr</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            facilis dolorem repellat hic similique iure, sint perferendis
            tempora ea quisquam?
          </p>
          <div className="footer-icon">
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={Twitter} alt="" />
          </div>
        </Col>
        <Col xs="6" md="4" sm="6" lg="2" className="footer-company-section mt-4">
          <h4>Company</h4>
          <p>About Us</p>
          <p>Work</p>
          <p>Latest News</p>
          <p>Careers</p>
        </Col>
        <Col xs="6" md="4" sm="6" lg="2" className="footer-product-section mt-4">
          <h4>Product</h4>
          <p>Prototype</p>
          <p>Plans & Pricing</p>
          <p>Customers</p>
          <p>Integrations</p>
        </Col>
        <Col xs="6" md="4" sm="6" lg="2" className="footer-support-section mt-4">
          <h4>Support</h4>
          <p>Help Desk</p>
          <p>Sales</p>
          <p>Become a Partner</p>
          <p>Developers</p>
        </Col>
        <Col xs="6" md="4" sm="6" lg="2" className="footer-contact-section mt-4">
          <h4>Contact</h4>
          <address>524 Broadway.NYC +1777-978-5570</address>
        </Col>
      </Row>
      <hr className="text-white" />
      <div className="footer-end">
        <p>@2023 CareerHub. All Rights Reserved</p>
        <p>
          Powered by <strong>Joob Seekr</strong>
        </p>
      </div>
    </div>
  );
};

export default Footer;
