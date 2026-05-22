import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col
} from "reactstrap";

const ViewAnimalModal = ({

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

        Animal Details

      </ModalHeader>

      <ModalBody>

        <Row>

          <Col lg="6" className="mb-3">

            <strong>
              Animal Tag ID:
            </strong>

            <div>
              {data.animalTagId}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Animal Type:
            </strong>

            <div>
              {data.animalType}
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
              Age:
            </strong>

            <div>
              {data.age}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Weight:
            </strong>

            <div>
              {data.weight}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Health Status:
            </strong>

            <div>
              {data.healthStatus}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Pregnancy Status:
            </strong>

            <div>
              {data.pregnancyStatus}
            </div>

          </Col>

        </Row>

      </ModalBody>

    </Modal>

  );

};

export default ViewAnimalModal;