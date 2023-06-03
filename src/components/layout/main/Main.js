import React from "react";
import Header from "../../header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "../../footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="header-section">
        <Header></Header>
      </div>
      <Container>
        <Outlet></Outlet>
      </Container>
      <div className="mt-5" style={{ backgroundColor: "#1A1919" }}>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
