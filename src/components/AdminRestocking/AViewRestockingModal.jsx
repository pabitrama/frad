import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col
} from "reactstrap";

const AViewRestockingModal = ({

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
              District:
            </strong>

            <div>
              {data.district}
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
              Priority:
            </strong>

            <div>
              {data.priority}
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

          <Col lg="6" className="mb-3">

            <strong>
              Expected Delivery:
            </strong>

            <div>
              {data.expectedDate}
            </div>

          </Col>

        </Row>

      </ModalBody>

    </Modal>

  );

};

export default AViewRestockingModal;