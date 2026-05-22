import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col
} from "reactstrap";

const ViewFarmerModal = ({

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

        Farmer Details

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
              Aadhaar:
            </strong>

            <div>
              {data.aadhaar}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Mobile:
            </strong>

            <div>
              {data.mobile}
            </div>

          </Col>

          <Col lg="6" className="mb-3">

            <strong>
              Gender:
            </strong>

            <div>
              {data.gender}
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

          <Col lg="12" className="mb-3">

            <strong>
              Village:
            </strong>

            <div>
              {data.village}
            </div>

          </Col>

        </Row>

      </ModalBody>

    </Modal>

  );

};

export default ViewFarmerModal;