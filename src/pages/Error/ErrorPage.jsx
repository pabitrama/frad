// import React from "react";

import {
  Container,
  Row,
  Col
} from "reactstrap";

import {
  Link
} from "react-router-dom";

const ErrorPage = () => {

  return (

    <div className="error-page">

      <Container fluid>

        <Row className="min-vh-100 align-items-center justify-content-center">

          <Col
            lg="6"
            className="text-center"
          >

            {/* ERROR CODE */}
            <h1 className="error-code text-danger">

              500

            </h1>

            {/* TITLE */}
            <h2 className="fw-bold mb-3">

              Something Went Wrong

            </h2>

            {/* DESCRIPTION */}
            <p className="text-muted mb-4">

              An unexpected error occurred.
              Please try again later.

            </p>

            {/* ACTIONS */}
            <div className="d-flex justify-content-center gap-3">

              <Link
                to="/"
                className="btn btn-primary"
              >

                <i className="bi bi-house-door me-2"></i>

                Go Home

              </Link>

              <button
                className="btn btn-danger"
                onClick={() =>
                  window.location.reload()
                }
              >

                <i className="bi bi-arrow-clockwise me-2"></i>

                Reload

              </button>

            </div>

          </Col>

        </Row>

      </Container>

    </div>

  );

};

export default ErrorPage;