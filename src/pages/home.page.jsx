import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { CardContainer } from "../components/login-card-component/login-card-styles";

const HomePageContainer = styled.div`
  min-height: 100vh;
  background-color: #f4f9f4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeCardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const HomePage = () => {
  let location = useLocation();
  console.log(location.state);

  return (
    <HomePageContainer>
      <CardContainer>
        <HomeCardContainer>
          <h5>Hello, {location.state.data.user.full_name}</h5>
        </HomeCardContainer>
      </CardContainer>
    </HomePageContainer>
  );
};

export default HomePage;
