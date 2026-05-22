import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col
} from "reactstrap";

const ViewAIServiceModal = ({

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

        AI Service Details

      </ModalHeader>

      <ModalBody>

        <Row>

          <Col lg="6" className="mb-3">

            <strong>
              Farmer Name:
            </strong>

            <div>
              {data.farmerName}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Animal Tag:
            </strong>

            <div>
              {data.animalTag}
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
              Technician:
            </strong>

            <div>
              {data.technician}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Service Date:
            </strong>

            <div>
              {data.serviceDate}
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
export default ViewAIServiceModal;