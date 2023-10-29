import React from "react";
import styled from "styled-components";

const HorizontalLineWithText = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 20px 0;
  position: relative;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #000;
  }

  &::before {
    margin-right: 10px;
  }

  &::after {
    margin-left: 10px;
  }
`;

const HorizontalLineWithCenteredText = ({ text }) => {
  return (
    <HorizontalLineWithText>
      <span>{text}</span>
    </HorizontalLineWithText>
  );
};

export default HorizontalLineWithCenteredText;
