import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col
} from "reactstrap";

const ViewDispatchModal = ({

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

        Dispatch Details

      </ModalHeader>

      <ModalBody>

        <Row>

          <Col lg="6" className="mb-3">

            <strong>
              Dispatch ID:
            </strong>

            <div>
              {data.dispatchId}
            </div>

          </Col>

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
              Batch Number:
            </strong>

            <div>
              {data.batchNumber}
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
              Dispatch Date:
            </strong>

            <div>
              {data.dispatchDate}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Vehicle Number:
            </strong>

            <div>
              {data.vehicleNumber}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Driver Name:
            </strong>

            <div>
              {data.driverName}
            </div>

          </Col>

        </Row>

      </ModalBody>

    </Modal>

  );

};

export default ViewDispatchModal;