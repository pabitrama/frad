// import React from "react";

import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Button
} from "reactstrap";

import { useSelector } from "react-redux";

import "./ViewProfileModal.css";

const ViewProfileModal = ({
  isOpen,
  toggle
}) => {

  /* =========================================
     GET USER DATA
  ========================================= */

  const {
    user,
    role
  } = useSelector(
    (state) => state.auth
  );

  return (

    <Modal
      isOpen={isOpen}
      toggle={toggle}
      centered
      size="md"
      className="profile-modal"
    >

      {/* =========================================
          HEADER
      ========================================= */}

      <ModalHeader
        toggle={toggle}
      >
        User Profile
      </ModalHeader>

      {/* =========================================
          BODY
      ========================================= */}

      <ModalBody>

        {/* PROFILE TOP */}
        <div className="profile-top-section">

          <img
            src="https://i.pravatar.cc/120"
            alt="profile"
            className="profile-modal-img"
          />

          <h4 className="mt-3 mb-1">
            {role}
          </h4>

          <p className="text-muted">
            {user}
          </p>

        </div>

        {/* PROFILE DETAILS */}
        <div className="profile-details mt-4">

          <Row>

            <Col md="6" className="mb-3">

              <div className="profile-info-card">

                <label>
                  User Role
                </label>

                <h6>
                  {role}
                </h6>

              </div>

            </Col>

            <Col md="6" className="mb-3">

              <div className="profile-info-card">

                <label>
                  Mobile Number
                </label>

                <h6>
                  {user}
                </h6>

              </div>

            </Col>

            <Col md="6" className="mb-3">

              <div className="profile-info-card">

                <label>
                  Status
                </label>

                <h6 className="text-success">
                  Active
                </h6>

              </div>

            </Col>

            <Col md="6" className="mb-3">

              <div className="profile-info-card">

                <label>
                  Last Login
                </label>

                <h6>
                  Today
                </h6>

              </div>

            </Col>

          </Row>

        </div>

        {/* ACTIONS */}
        <div className="text-end mt-4">

          <Button
            color="secondary"
            onClick={toggle}
          >
            Close
          </Button>

        </div>

      </ModalBody>

    </Modal>
  );
};

export default ViewProfileModal;