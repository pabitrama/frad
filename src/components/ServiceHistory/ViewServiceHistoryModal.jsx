import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col
} from "reactstrap";

const ViewServiceHistoryModal = ({

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

        Service History Details

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
              {data.animalTagId}
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
              Service Date:
            </strong>

            <div>
              {data.serviceDate}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Result:
            </strong>

            <div>
              {data.status}
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

export default ViewServiceHistoryModal;