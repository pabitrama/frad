import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col
} from "reactstrap";

const ViewGrievanceModal = ({

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

        Complaint Details

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
              District:
            </strong>

            <div>
              {data.district}
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
              Complaint:
            </strong>

            <div>
              {data.description}
            </div>

          </Col>

        </Row>

      </ModalBody>

    </Modal>

  );

};

export default ViewGrievanceModal;