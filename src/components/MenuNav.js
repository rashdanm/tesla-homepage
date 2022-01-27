import React from "react";
import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
import { VscGlobe } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";

const Container = styled.div`
  font-family: "Gotham-Book";
  color: var(--grayBlack);
  font-size: 14px;
  overflow-y: auto;
  z-index: 900;
  position: fixed;
  top: 0;
  right: 0px;
  height: 100vh;
  width: 320px;
  padding-left: 40px;
  padding-top: 30px;
  background-color: #fff;
  transform: ${(props) =>
    props.displayMenu ? "translateX(0)" : "translateX(100%)"};
  transition: 0.3s;

  ul {
    padding-top: 2.5rem;
    padding-right: 1.5rem;
  }

  li {
    padding: 12px 0;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

const CloseButton = styled(IoCloseOutline)`
  cursor: pointer;
  font-size: 1.7rem;
  position: absolute;
  right: 0;
  top: 0;
  margin: 1.5rem;
`;

const Bottom = styled.div`
  padding-top: 10px;
  display: flex;
`;

const Globe = styled(VscGlobe)`
  font-size: 24px;
  color: var(--gray);
`;

const ChevronRight = styled(VscChevronRight)`
  font-size: 1.2rem;
  font-weight: 100;
`;

const Text = styled.div`
  padding-left: 10px;
  padding-top: 0.2rem;

  h4 {
    font-weight: 900;
  }

  p {
    line-height: 1.6rem;
    font-size: 0.8rem;
    font-weight: 100;
    color: var(--lightGray);
  }
`;

const MenuNav = ({ closeButton, displayMenu }) => {
  const menuItems = [
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
    "Existing Inventory",
    "Used Inventory",
    "Trade-in",
    "Test Drive",
    "Fleet and Buisiness",
    "Powerwall",
    "Energy",
    "Commercial Energy",
    "Utilities",
    "Charging",
    "Find Us",
    "Support",
    "Investor Relations",
    "Account",
  ];
  return (
    <Container displayMenu={displayMenu}>
      <CloseButton onClick={closeButton}>
        <IoCloseOutline />
      </CloseButton>

      <ul>
        {menuItems.map((item, index) => (
          <li>
            <a>{item}</a>
          </li>
        ))}
        <li>
          <a>More</a>
          <ChevronRight>
            <VscChevronRight />
          </ChevronRight>
        </li>
      </ul>
      <Bottom>
        <Globe>
          <VscGlobe />
        </Globe>
        <Text>
          <h4>United Kingdom</h4>
          <p>English</p>
        </Text>
      </Bottom>
    </Container>
  );
};

export default MenuNav;
