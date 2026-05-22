import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col
} from "reactstrap";

const ADViewReportModal = ({

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

        Report Details

      </ModalHeader>

      <ModalBody>

        <Row>

          <Col lg="6" className="mb-3">

            <strong>
              Report Name:
            </strong>

            <div>
              {data.reportName}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Report Type:
            </strong>

            <div>
              {data.reportType}
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

export default ADViewReportModal;