import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { IoChevronDownSharp } from "react-icons/io5";
import Footer from "./Footer";

const Wrapper = styled.div`
  background-image: ${(props) => `url("/images/${props.mobileImg}.jpg")`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    background-image: ${(props) => `url("images/${props.desktopImg}.jpg")`};
  }
`;
const TopSection = styled.div`
  padding-top: 100px;
  text-align: center;
`;
const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 40px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: green;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const SectionOneBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: yellow;
  padding-bottom: 0px;
`;

const SectionOneBottomText = styled.div`
  border-bottom: 1px solid black;
  font-size: 14px;
  margin-bottom: 10px;
`;

const ChevronWrapper = styled(IoChevronDownSharp)`
  font-size: 2rem;
`;

const Section = ({
  mobileImg,
  desktopImg,
  heading,
  text,
  twoButtons,
  buttonOne = "custom order",
  buttonTwo = "available inventory",
  firstSection,
  lastSection,
}) => {
  return (
    <Wrapper mobileImg={mobileImg} desktopImg={desktopImg}>
      <TopSection>
        <h1>{heading}</h1>
        <p>{text}</p>
      </TopSection>
      <BottomSection>
        <ButtonsWrapper>
          <Button buttonText={buttonOne} />
          {twoButtons && <Button buttonText={buttonTwo} />}
        </ButtonsWrapper>
        {firstSection && (
          <SectionOneBottom>
            <SectionOneBottomText>
              Schedule a Touchless Test Drive
            </SectionOneBottomText>
            <ChevronWrapper>
              <IoChevronDownSharp />
            </ChevronWrapper>
          </SectionOneBottom>
        )}
        {lastSection && <Footer />}
      </BottomSection>
    </Wrapper>
  );
};

export default Section;
