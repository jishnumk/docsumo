import styled from "styled-components";

export const CardContainer = styled.div`
  width: 370px;
  background-color: #ffffff;
  box-shadow: rgba(16, 0, 0, 0.1) 0px 2px 4px;
  -webkit-box-shadow: rgba(16, 0, 0, 0.1) 0px 2px 4px;
  -moz-box-shadow: rgba(16, 0, 0, 0.1) 0px 2px 4px;
  padding: 40px;
  position: relative;
  box-sizing: border-box;
`;

export const LogoContainer = styled.div`
  border-radius: 50%;
  background-color: #ffffff;
  width: 64px;
  height: 64px;
  position: absolute;
  top: -32px;
  left: calc(50% - 32px);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
