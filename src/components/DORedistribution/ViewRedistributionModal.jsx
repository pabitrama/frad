import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col
} from "reactstrap";

const ViewRedistributionModal = ({

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

        Redistribution Details

      </ModalHeader>

      <ModalBody>

        <Row>

          <Col lg="6" className="mb-3">

            <strong>
              From Block:
            </strong>

            <div>
              {data.fromBlock}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              To Block:
            </strong>

            <div>
              {data.toBlock}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Breed:
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
              Transfer Date:
            </strong>

            <div>
              {data.transferDate}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Vehicle Number:
            </strong>

            <div>
              {data.vehicleNo}
            </div>

          </Col>

          <Col lg="12" className="mb-3">

            <strong>
              Remarks:
            </strong>

            <div>
              {data.remarks}
            </div>

          </Col>

        </Row>

      </ModalBody>

    </Modal>

  );

};

export default ViewRedistributionModal;