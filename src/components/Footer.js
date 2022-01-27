import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: var(--lightGray);
  font-size: 0.8rem;
  ${"" /* background: yellow; */}
  padding-bottom: 10px;
  padding-top: 30px;
  position: relative;
  bottom: -40px;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  li {
    padding-bottom: 0.5rem;
  }

  @media (min-width: 768px) {
    ul {
      flex-direction: row;
    }

    a {
      margin: 0.8rem;
    }
  }
`;

const DesktopItem = styled.li`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Footer = () => {
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
        <DesktopItem>
          <a href="#">Contact</a>
        </DesktopItem>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <DesktopItem>
          <a href="#">Locations</a>
        </DesktopItem>
      </ul>
    </Container>
  );
};

export default Footer;
