import React from "react";
import styled from "styled-components";
import Section from "./Section";
import info from "../info";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Home = () => {
  return (
    <Container>
      {info.map((item) => (
        <Section
          mobileImg={item.mobile}
          desktopImg={item.desktop}
          heading={item.heading}
          text={item.text}
          buttonOne={item.buttonOne}
          buttonTwo={item.buttonTwo}
          twoButtons={item.twoButtons}
          FirstSection={item.firstSection}
        />
      ))}
    </Container>
  );
};

export default Home;
