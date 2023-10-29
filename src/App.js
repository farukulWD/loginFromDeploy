import React from "react";
import LoginForm from "./Componets/LoginForm";
import ContentWrapper, { AppWrapper } from "./AppStyle";

function App() {
  return (
    <AppWrapper>
      <ContentWrapper>
        <LoginForm></LoginForm>
      </ContentWrapper>
    </AppWrapper>
  );
}

export default App;
