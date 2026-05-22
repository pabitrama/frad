import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
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

const AddRestockingModal = ({

  isOpen,
  toggle,

  onSubmit,

  editData

}) => {

  const initialValues = {

    requestId:
      editData?.requestId || "",

    breed:
      editData?.breed || "",

    quantity:
      editData?.quantity || "",

    requestDate:
      editData?.requestDate || "",

    remarks:
      editData?.remarks || "",

    status:
      editData?.status || "Pending"

  };

  return (

    <Modal
      isOpen={isOpen}
      toggle={toggle}
      centered
      size="lg"
    >

      <ModalHeader toggle={toggle}>

        {
          editData
            ? "Edit Restocking Request"
            : "Add Restocking Request"
        }

      </ModalHeader>

      <ModalBody>

        <Formik
          initialValues={initialValues}
          enableReinitialize
          onSubmit={(values) => {

            onSubmit(values);

            toggle();

          }}
        >

          {() => (

            <Form>

              <Row>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      Request ID
                    </Label>

                    <Field
                      as={Input}
                      name="requestId"
                    />

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      Breed
                    </Label>

                    <Field
                      as={Input}
                      name="breed"
                    />

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      Quantity
                    </Label>

                    <Field
                      as={Input}
                      name="quantity"
                    />

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      Request Date
                    </Label>

                    <Field
                      as={Input}
                      type="date"
                      name="requestDate"
                    />

                  </FormGroup>

                </Col>

                <Col lg="12">

                  <FormGroup>

                    <Label>
                      Remarks
                    </Label>

                    <Field
                      as={Input}
                      type="textarea"
                      rows="4"
                      name="remarks"
                    />

                  </FormGroup>

                </Col>

              </Row>

              <div className="text-end mt-4">

                <Button
                  color="secondary"
                  className="me-2"
                  onClick={toggle}
                >

                  Cancel

                </Button>

                <Button
                  color="primary"
                  type="submit"
                >

                  {
                    editData
                      ? "Update"
                      : "Save"
                  }

                </Button>

              </div>

            </Form>

          )}

        </Formik>

      </ModalBody>

    </Modal>

  );

};

export default AddRestockingModal;