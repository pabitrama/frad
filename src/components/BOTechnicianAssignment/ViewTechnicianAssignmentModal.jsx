import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col
} from "reactstrap";

const ViewTechnicianAssignmentModal = ({

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

        Technician Assignment Details

      </ModalHeader>

      <ModalBody>

        <Row>

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
              Service Area:
            </strong>

            <div>
              {data.serviceArea}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Daily Capacity:
            </strong>

            <div>
              {data.dailyCapacity}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Pending Requests:
            </strong>

            <div>
              {data.pendingRequests}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Breed Demand:
            </strong>

            <div>
              {data.breedDemand}
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
              Assigned Quantity:
            </strong>

            <div>
              {data.assignedQuantity}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Service Schedule:
            </strong>

            <div>
              {data.serviceSchedule}
            </div>

          </Col>

        </Row>

      </ModalBody>

    </Modal>

  );

};

export default ViewTechnicianAssignmentModal;