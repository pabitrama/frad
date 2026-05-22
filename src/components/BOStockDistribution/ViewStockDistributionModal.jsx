import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col
} from "reactstrap";

const ViewStockDistributionModal = ({

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

        Distribution Details

      </ModalHeader>

      <ModalBody>

        <Row>

          <Col lg="6" className="mb-3">

            <strong>
              Distribution ID:
            </strong>

            <div>
              {data.distributionId}
            </div>

          </Col>

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
              Block:
            </strong>

            <div>
              {data.block}
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
              Distribution Date:
            </strong>

            <div>
              {data.distributionDate}
            </div>

          </Col>

        </Row>

      </ModalBody>

    </Modal>

  );

};

export default ViewStockDistributionModal;