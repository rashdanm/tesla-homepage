import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 0.8rem;
  background: yellow;
  text-align: center;
  padding-bottom: 10px;
  padding-top: 30px;
  position: relative;
  bottom: -40px;
  li {
    padding-bottom: 0.5rem;
  }
`;

const Footer = () => {
  //   const d = new Date();
  const year = new Date().getFullYear();
  return (
    <Container>
      <ul>
        <li>
          <a href="#">Tesla &copy; {year}</a>
        </li>
        <li>
          <a href="#">Privacy & Legal</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
      </ul>
    </Container>
  );
};

export default Footer;
