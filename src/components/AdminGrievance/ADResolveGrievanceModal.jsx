import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

import {
  Formik,
  Form,
  Field
} from "formik";

const ADResolveGrievanceModal = ({

  isOpen,
  toggle,

  onSubmit

}) => {

  return (

    <Modal
      isOpen={isOpen}
      toggle={toggle}
      centered
    >

      <ModalHeader toggle={toggle}>

        Resolve Grievance

      </ModalHeader>

      <ModalBody>

        <Formik
          initialValues={{
            resolution: ""
          }}
          onSubmit={(values) => {

            onSubmit(values);

            toggle();

          }}
        >

          {() => (

            <Form>

              <FormGroup>

                <Label>
                  Resolution Remarks
                </Label>

                <Field
                  as={Input}
                  type="textarea"
                  rows="5"
                  name="resolution"
                />

              </FormGroup>

              <div className="text-end mt-4">

                <Button
                  color="secondary"
                  className="me-2"
                  onClick={toggle}
                >

                  Cancel

                </Button>

                <Button
                  color="success"
                  type="submit"
                >

                  Resolve Complaint

                </Button>

              </div>

            </Form>

          )}

        </Formik>

      </ModalBody>

    </Modal>

  );

};

export default ADResolveGrievanceModal;