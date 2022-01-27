import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 90vw;
  height: 40px;
  font-size: 12px;
  background-color: rgba(23, 26, 32, 0.8);
  color: rgba(255, 255, 255, 0.9);
  border-radius: 100px;
  margin: 8px;

  @media (min-width: 768px) {
    width: 256px;
    margin: 10px;
  }
`;

const Button = ({ buttonText }) => {
  return (
    <Wrapper>
      <p>{buttonText}</p>
    </Wrapper>
  );
};

export default Button;
