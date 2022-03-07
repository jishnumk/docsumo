import React from "react";
import styled from "styled-components";
import LoginCard from "../components/login-card-component/login-card.component";

const Container = styled.div`
  min-height: 100vh;
  background-color: #f7f8ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginPage = () => {
  return (
    <Container>
      <LoginCard />
    </Container>
  );
};

export default LoginPage;
