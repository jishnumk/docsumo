import React from "react";
import styled from "styled-components";
import { useField, ErrorMessage } from "formik";

const InputLabel = styled.label`
  color: #999;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;

const InputBox = styled.input`
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 2px solid #8adbdb;
  box-sizing: border-box;
  margin-bottom: 5px;

  &:focus {
    outline: none;
  }

  &:focus ~ ${InputLabel}, &:valid ~ ${InputLabel} {
    top: -20px;
    font-size: 14px;
    color: #5264ae;
  }
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 45px;
  width: 100%;
`;

const ErrorMsg = styled(ErrorMessage)`
  color: #ff3333;
`;

const InputField = ({ type, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <InputGroup>
      <InputBox autoComplete="off" type={type} {...field} {...props} />
      <InputLabel>{label}</InputLabel>
      <ErrorMsg component="div" name={field.name} />
    </InputGroup>
  );
};

export default InputField;
