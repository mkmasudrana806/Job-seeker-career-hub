import React from "react";
import Header from "../../header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <div>
      <div className="header-section">
        <Header></Header>
      </div>
      <Container>
        <Outlet></Outlet>
      </Container>
      <div className="footer-section">
        <h1>this is footer section</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          provident nobis odit adipisci voluptatum delectus laboriosam sapiente
          iusto repudiandae quidem corporis quasi explicabo porro cum in magnam
          deleniti minus enim.
        </p>
      </div>
    </div>
  );
};

export default Main;
