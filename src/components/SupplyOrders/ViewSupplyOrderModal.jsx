
import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col
} from "reactstrap";

const ViewSupplyOrderModal = ({

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

        Supply Order Details

      </ModalHeader>

      <ModalBody>

        <Row>

          <Col lg="6" className="mb-3">

            <strong>
              Order ID:
            </strong>

            <div>
              {data.orderId}
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
              Batch Requirement:
            </strong>

            <div>
              {data.batch}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Dispatch Deadline:
            </strong>

            <div>
              {data.deadline}
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

export default ViewSupplyOrderModal;