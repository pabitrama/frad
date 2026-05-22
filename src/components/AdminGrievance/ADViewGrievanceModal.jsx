import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col
} from "reactstrap";

const ADViewGrievanceModal = ({

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

        Grievance Details

      </ModalHeader>

      <ModalBody>

        <Row>

          <Col lg="6" className="mb-3">

            <strong>
              Complaint ID:
            </strong>

            <div>
              {data.complaintId}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Complainant:
            </strong>

            <div>
              {data.complainantName}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Category:
            </strong>

            <div>
              {data.category}
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

          <Col lg="12" className="mb-3">

            <strong>
              Grievance:
            </strong>

            <div>
              {data.grievance}
            </div>

          </Col>

        </Row>

      </ModalBody>

    </Modal>

  );

};

export default ADViewGrievanceModal;