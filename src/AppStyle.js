import styled from "styled-components";

export const AppWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(to bottom, #ff5722, #e91e63);
  padding: 10px;
  @media only screen and (min-width: 350px) and (max-width: 480px) {
    min-height: 100vh;
  }
`;
const ContentWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default ContentWrapper;
