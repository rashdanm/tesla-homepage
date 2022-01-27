import React, { useState } from "react";
import styled from "styled-components";
import MenuNav from "./MenuNav";

const Container = styled.div`
  width: 100vw;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  position: fixed;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  img {
    width: 120px;
    height: 15px;
  }
`;

const Center = styled.div`
  padding-left: 40px;
  ul {
    display: none;
  }

  @media (min-width: 768px) {
    ul {
      display: flex;
    }

    a {
      margin: 1rem;
    }
  }
`;

const Right = styled.div`
  ul {
    display: flex;
  }
`;

const DesktopItem = styled.li`
  display: none;

  @media (min-width: 768px) {
    display: block;

    a {
      margin: 0.8rem;
    }
  }
`;

const MenuButton = styled.li`
  display: block;
  cursor: pointer;
`;

const Header = () => {
  const [click, setClick] = useState(false);
  const openMenu = () => setClick(true);
  const closeMenu = () => setClick(false);

  return (
    <Container>
      <img src="images/logo-small.svg" alt="tesla" />
      <Center>
        <ul>
          <li>
            <a href="#">Model S</a>
          </li>
          <li>
            <a href="#">Model 3</a>
          </li>
          <li>
            <a href="#">Model X</a>
          </li>
          <li>
            <a href="#">Model Y</a>
          </li>
          <li>
            <a href="#">Powerwall</a>
          </li>
          <li>
            <a href="#">Charging</a>
          </li>
        </ul>
      </Center>
      <Right>
        <ul>
          <DesktopItem>
            <a href="#">Support</a>
          </DesktopItem>
          <DesktopItem>
            <a href="#">Shop</a>
          </DesktopItem>
          <DesktopItem>
            <a href="#">Account</a>
          </DesktopItem>
          <MenuButton onClick={openMenu}>Menu</MenuButton>
        </ul>
      </Right>
      <MenuNav closeButton={closeMenu} displayMenu={click} />
    </Container>
  );
};

export default Header;
