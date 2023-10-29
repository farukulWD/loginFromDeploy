import styled from "styled-components";

const LoginFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column-reverse;
    height: auto;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    flex-direction: column-reverse;
    height: auto;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 100%;
    flex-direction: column-reverse;
    height: auto;
  }
`;

export const AnimationContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
  @media only screen and(min-width:481px) and (max-width: 768px) {
    width: 100%;
  }
`;

export const FormWrapper = styled.div`
  background-color: #fff;
  padding: ${(props) => (props.small ? "10px" : "50px")};
  width: 50%;

  border-radius: 5px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 5px;
  }
  @media only screen and(min-width: 481px) and (max-width: 768px) {
    width: 100%;
    padding: 5px;
  }
`;

export const Form = styled.form``;
export const Heading = styled.h1`
  font-size: 30px;
  color: #fff;
`;
export const SubHeading = styled.h2`
  font-size: 24px;
  color: #fff;
`;
export const PasswordInputStyle = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: ${(props) => (props.full ? "95%" : "97%")};
  font-size: 16px;
  padding: 12px 7.9px;
  margin: 10px 0;
  border: 1px solid #ffad7b;
  border-radius: 3px;
  @media only screen and (max-width: 480px) {
    padding: 10px 10px;
    display: block;
    width: 94%;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    padding: 10px;
    display: block;
    width: 96%;
  }
`;

export const ShowHideButton = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #777;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #ffad7b;
  color: #fff;
  border: none;
  font-size: 18px;
  border-radius: 3px;
  margin-top: 3px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffbd8b;
  }
`;

export const DisableButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #ffad7b;
  color: #fff;
  border: none;
  font-size: 18px;
  border-radius: 3px;
  margin-top: 3px;
  transition: background-color 0.3s;
`;

export const ForgotPassword = styled.p`
  text-align: right;
  margin-top: -10px;
  cursor: pointer;
  color: blue;
`;

export const SocialButton = styled(Button)`
  background-color: white;
  border: 1px solid #ffad7b;
  color: #ffad7b;
  &:hover {
    background-color: #ffad7b;
    color: #fff;
  }
`;

export const SocialLoginWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 10px 0px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export default LoginFormWrapper;
