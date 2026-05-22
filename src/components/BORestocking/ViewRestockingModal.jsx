import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col
} from "reactstrap";

const ViewRestockingModal = ({

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

        Restocking Details

      </ModalHeader>

      <ModalBody>

        <Row>

          <Col lg="6" className="mb-3">

            <strong>
              Request ID:
            </strong>

            <div>
              {data.requestId}
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
              Request Date:
            </strong>

            <div>
              {data.requestDate}
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

export default ViewRestockingModal;