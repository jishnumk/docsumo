import styled from "styled-components";
import { Form } from "formik";

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginTitle = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin: 5px;
`;

export const FormContainer = styled(Form)`
  width: 100%;
  margin-top: 40px;
`;

export const Button = styled.button`
  background-color: #405089;
  border: none;
  color: #ffffff;
  height: 40px;
  width: 100%;
  font-size: 14px;
  border-radius: 20px;
  cursor: pointer;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  width: 100%;
`;

export const ButtonOutlined = styled.a`
  border-radius: 16px;
  color: #405089;
  font-size: 16px;
  padding: 6px 16px;
  border: solid #405089 1px;
  text-decoration: none;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #707070;
  font-size: 14px
`;

export const ErrorInfo = styled.p`
  color: #ff3333;
  margin: 20px 0;
  font-size: 14px;
  text-align: center;
`;
