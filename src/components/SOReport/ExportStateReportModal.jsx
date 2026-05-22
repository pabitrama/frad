import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

const ExportStateReportModal = ({

  isOpen,
  toggle

}) => {

  return (

    <Modal
      isOpen={isOpen}
      toggle={toggle}
      centered
    >

      <ModalHeader toggle={toggle}>

        Export State Report

      </ModalHeader>

      <ModalBody>

        <FormGroup className="mb-3">

          <Label>
            Export Format
          </Label>

          <Input type="select">

            <option>
              PDF
            </option>

            <option>
              Excel
            </option>

            <option>
              CSV
            </option>

          </Input>

        </FormGroup>

        <Button
          color="primary"
          className="w-100"
        >

          <i className="bi bi-download me-2"></i>

          Export Report

        </Button>

      </ModalBody>

    </Modal>

  );

};

export default ExportStateReportModal;