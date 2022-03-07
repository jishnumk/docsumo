import React, { useState } from "react";
import InputField from "../inputbox.component";
import {
  Button,
  ButtonOutlined,
  CardContentContainer,
  CardFooter,
  ErrorInfo,
  FormContainer,
  Link,
  LoginTitle,
} from "./contents-styled-components";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import SpinnerLoad from "../spinner/spinner.component";
import { useNavigate } from "react-router-dom";

const LoginCardContent = () => {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState({
    status: false,
    error: "",
    message: "",
  });
  const apiUrl = "https://apptesting.docsumo.com/api/v1/eevee/login/";
  const validate = yup.object({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    setIsLoading(true);
    await axios
      .post(apiUrl, {
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        console.log(response);
        setServerError({
          status: false,
          ...serverError,
        });
        navigate("/home", { state: response.data });
      })
      .catch(function (error) {
        setServerError({
          status: true,
          error: error.response.data.error,
          message: error.response.data.message,
        });
        setIsLoading(false);
      });
  };

  return (
    <CardContentContainer>
      <LoginTitle>Login to Docsumo</LoginTitle>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validate}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {(formik) => (
          <FormContainer>
            <InputField name="email" label="Work Email" type="text" required />
            <InputField
              name="password"
              label="Password"
              type="password"
              required
            />
            {serverError.status ? (
              <ErrorInfo>
                {serverError.error + ". " + serverError.message}
              </ErrorInfo>
            ) : (
              ""
            )}
            <Button type="submit">
              {isLoading ? <SpinnerLoad /> : "LOGIN"}
            </Button>
          </FormContainer>
        )}
      </Formik>
      <CardFooter>
        <Link href="#">Don't have an account?</Link>
        <ButtonOutlined href="#">Sign Up</ButtonOutlined>
      </CardFooter>
    </CardContentContainer>
  );
};

export default LoginCardContent;
