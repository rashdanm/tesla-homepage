import React from "react";
import styled from "styled-components";
import Section from "./Section";
import info from "../info";
import Footer from "./Footer";

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
          firstSection={item.firstSection}
          lastSection={item.lastSection}
        />
      ))}
      {/* <Footer /> */}
    </Container>
  );
};

export default Home;
