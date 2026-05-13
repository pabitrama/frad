// import React from "react";

import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col
} from "reactstrap";

const ViewProcurementModal = ({

  isOpen,
  toggle,

  data

}) => {

  if (!data) return null;

  return (

    <Modal
      isOpen={isOpen}
      toggle={toggle}
      centered
      size="lg"
    >

      <ModalHeader toggle={toggle}>

        Procurement Details

      </ModalHeader>

      <ModalBody>

        <Row>

          <Col lg="6" className="mb-3">

            <strong>
              Procurement ID:
            </strong>

            <div>
              {data.procurementId}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Vendor Name:
            </strong>

            <div>
              {data.vendor}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Breed Type:
            </strong>

            <div>
              {data.breed}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Quantity:
            </strong>

            <div>
              {data.quantity}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Date:
            </strong>

            <div>
              {data.date}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Status:
            </strong>

            <div>
              {data.status}
            </div>

          </Col>

        </Row>

      </ModalBody>

    </Modal>

  );

};

export default ViewProcurementModal;