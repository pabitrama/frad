import { useState, useEffect } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";


import login_left_img from "../../assets/images/frad_login_left.png";
import odisha_govt_seal from "../../assets/images/seal_white.png";

import "./Login.css";

import {
  Formik,
  Form,
  Field,
  ErrorMessage
} from "formik";

import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";

import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../components/common/Button/CustomButton";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* =========================================
     STATES
  ========================================= */

  const [otpSent, setOtpSent] =
    useState(false);

  const [otpVerified, setOtpVerified] =
    useState(false);

  const [timer, setTimer] =
    useState(30);

  const [showPassword, setShowPassword] =
    useState(false);

  /* =========================================
     OTP TIMER
  ========================================= */

  useEffect(() => {

    let interval;

    if (otpSent && timer > 0) {

      interval = setInterval(() => {

        setTimer((prev) => prev - 1);

      }, 1000);

    }

    return () => clearInterval(interval);

  }, [otpSent, timer]);

  /* =========================================
     INITIAL VALUES
  ========================================= */

  const initialValues = {
    role: "",
    mobile: "",
    password: "",
    otp: ""
  };

  /* =========================================
     VALIDATION
  ========================================= */

  const validationSchema = Yup.object({

    role: Yup.string()
      .required("Please select role"),

    mobile: Yup.string()
      .matches(
        /^[0-9]{10}$/,
        "Enter valid 10 digit mobile number"
      )
      .required("Mobile number is required"),

    password: Yup.string()
      .min(4, "Minimum 4 characters")
      .required("Password is required"),

    otp: Yup.string()
      .when([], {
        is: () => otpSent,
        then: () =>
          Yup.string()
            .required("OTP is required")
            .min(4)
      })

  });

  /* =========================================
     LOGIN SUBMIT
  ========================================= */

  const handleSubmit = (values) => {

    if (otpSent && !otpVerified) {

      alert("Please verify OTP first");

      return;
    }

    dispatch(
      login({
        user: values.mobile,
        role: values.role
      })
    );

    if(values.role == "Admin"){
        navigate("/admin/dashboard");
    } else if(values.role == "State Officer"){
        navigate("/state/dashboard")
    } else if(values.role == "District Officer"){
        navigate("/district/dashboard")
    } else if(values.role == "Block Officer"){
        navigate("/block/dashboard")
    } else if(values.role == "AI Technician"){
        navigate("/technician/dashboard")
    } else {
        navigate("/vendor/dashboard")
    }

    

  };

  /* =========================================
     SEND OTP
  ========================================= */

  const handleSendOTP = () => {

    setOtpSent(true);

    setOtpVerified(false);

    setTimer(30);

    alert("OTP Sent Successfully");

  };

  /* =========================================
     VERIFY OTP
  ========================================= */

  const handleVerifyOTP = () => {

    setOtpVerified(true);

    alert("OTP Verified Successfully");

  };

  return (

    <div className="login-page">

      <Container fluid>
        <Row className="login_header">
            <Col lg="12" md="12">
                <div className="d-flex justify-contetn-start align-items-center gap-3">
                    <img className="lh_logo" src={odisha_govt_seal} alt="Odisha Seal" />
                    <div className="lh_lext">
                        <h4>Fisheries and Animal Resources Development Department</h4>
                        <h5>Government of Odisha</h5>
                    </div>
                </div>
            </Col>
        </Row>

        <Row className="vh-100 align-items-center justify-content-center login_section">

          {/* =========================================
              LEFT IMAGE
          ========================================= */}

          <Col
            lg="6"
            className="d-none d-lg-flex justify-content-center align-items-center"
          >

            <img
              src={login_left_img}
              alt="Login"
              className="img-fluid"
              style={{
                maxWidth: "520px"
              }}
            />

          </Col>

          {/* =========================================
              LOGIN FORM
          ========================================= */}

          <Col
            lg="5"
            md="10"
            sm="12"
            className="d-flex justify-content-center"
          >

            <Card className="login-card shadow-lg border-0">

              <CardBody className="p-4">

                {/* HEADER */}
                <div className="text-center mb-4">

                  <h2 className="fw-bold text-white">
                    Semen Inventory Portal
                  </h2>

                  {/* <p className="text-light">
                    Role Based Login System
                  </p> */}

                </div>

                {/* FORM */}
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >

                  {() => (

                    <Form>

                      {/* =========================================
                          USER ROLE
                      ========================================= */}

                      <FormGroup>

                        <Label className="text-white">
                          User Role
                        </Label>

                        <Field
                          as={Input}
                          type="select"
                          name="role"
                          className="form-select"
                        >

                          <option value="">
                            Select Role
                          </option>

                          <option value="Admin">
                            Admin
                          </option>

                          <option value="State Officer">
                            State Officer
                          </option>

                          <option value="District Officer">
                            District Officer
                          </option>

                          <option value="Block Officer">
                            Block Officer
                          </option>

                          <option value="AI Technician">
                            AI Technician
                          </option>

                          <option value="Vendor">
                            Vendor
                          </option>

                        </Field>

                        <ErrorMessage
                          name="role"
                          component="div"
                          className="text-danger small"
                        />

                      </FormGroup>

                      {/* MOBILE */}
                      <FormGroup>

                        <Label className="text-white">
                          Mobile Number
                        </Label>

                        <Field
                          as={Input}
                          type="text"
                          name="mobile"
                          placeholder="Enter Mobile Number"
                          maxLength="10"
                        />

                        <ErrorMessage
                          name="mobile"
                          component="div"
                          className="text-danger small"
                        />

                      </FormGroup>

                      {/* PASSWORD */}
                      <FormGroup>

                        <Label className="text-white">
                          Password
                        </Label>

                        <div className="password-wrapper">

                          <Field
                            as={Input}
                            type={
                              showPassword
                                ? "text"
                                : "password"
                            }
                            name="password"
                            placeholder="Enter Password"
                          />

                          <button
                            type="button"
                            className="show-pass-btn"
                            onClick={() =>
                              setShowPassword(
                                !showPassword
                              )
                            }
                          >

                            <i
                              className={
                                showPassword
                                  ? "bi bi-eye-slash"
                                  : "bi bi-eye"
                              }
                            ></i>

                          </button>

                        </div>

                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-danger small"
                        />

                      </FormGroup>

                      {/* OTP SECTION */}
                      <FormGroup className="position-relative">

                        <Label className="text-white">
                          OTP Verification
                        </Label>

                        <Row>
                            <Col md="4">
                                <Button
                                    type="button"
                                    className="otp-btn"
                                    disabled={
                                        otpSent && timer > 0
                                    }
                                    onClick={handleSendOTP}
                                    >

                                    {!otpSent
                                        ? "Send OTP"
                                        : timer > 0
                                        ? `${timer}s`
                                        : "Resend"}

                                </Button>
                            </Col>
                            
                            {otpSent && (
                                <Col md="4">
                                    <div className="otp-wrapper">
                                        
                                    <Field
                                        as={Input}
                                        type="text"
                                        name="otp"
                                        placeholder="Enter OTP"
                                    />
                                    </div>
                                </Col>

                            )}
                            {/* VERIFY OTP */}
                            {otpSent && !otpVerified && (
                                <Col md="4">

                                    <Button
                                    type="button"
                                    className="verify-btn w-100 mb-3"
                                    onClick={handleVerifyOTP}
                                    >

                                    Verify OTP

                                    </Button>

                                </Col>
                            )}
                        </Row>
                        
                        <ErrorMessage
                          name="otp"
                          component="div"
                          className="text-danger small"
                        />
                     
                        {/* VERIFIED */}
                        {otpVerified && (

                            <div className="otp-success mb-3">

                            <i className="bi bi-check-circle-fill"></i>

                            OTP Verified Successfully

                            </div>

                        )}

                      </FormGroup>

                     


                      <Row>
                       
                        <Col md="6">
                            {/* FORGOT */}
                            <div className="text-center mt-3">

                                <Link
                                to="/forgot-password"
                                className="forgot-btn"
                                >

                                Forgot Password?

                                </Link>

                            </div>
                        </Col>
                        <Col md="6">
                            {/* LOGIN BUTTON */}
                            <CustomButton
                                type="submit"
                                text="Login"
                                variant="secondary"
                                icon="bi bi-funnel"
                                fullWidth={true}
                            />
                        </Col>

                      </Row>
                      



                    </Form>

                  )}

                </Formik>

              </CardBody>

            </Card>

          </Col>

        </Row>

      </Container>

    </div>
  );
};

export default Login;