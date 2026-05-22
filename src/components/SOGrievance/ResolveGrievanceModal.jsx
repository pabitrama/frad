import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

const ResolveGrievanceModal = ({

  isOpen,
  toggle,

  onResolve

}) => {

  return (

    <Modal
      isOpen={isOpen}
      toggle={toggle}
      centered
    >

      <ModalHeader toggle={toggle}>

        Resolve Complaint

      </ModalHeader>

      <ModalBody>

        <FormGroup className="mb-3">

          <Label>
            Resolution Remarks
          </Label>

          <Input
            type="textarea"
            rows="5"
          />

        </FormGroup>

        <Button
          color="success"
          className="w-100"
          onClick={onResolve}
        >

          <i className="bi bi-check-circle me-2"></i>

          Mark as Resolved

        </Button>

      </ModalBody>

    </Modal>

  );

};

export default ResolveGrievanceModal;