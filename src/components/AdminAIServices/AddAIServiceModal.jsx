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

const AddAIServiceModal = ({

  isOpen,
  toggle,

  onSubmit,

  editData

}) => {

  const initialValues = {

    farmerName:
      editData?.farmerName || "",

    animalTag:
      editData?.animalTag || "",

    breed:
      editData?.breed || "",

    technician:
      editData?.technician || "",

    serviceDate:
      editData?.serviceDate || "",

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
            ? "Edit AI Service"
            : "Add AI Service"
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
                      Farmer Name
                    </Label>

                    <Field
                      as={Input}
                      name="farmerName"
                    />

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      Animal Tag
                    </Label>

                    <Field
                      as={Input}
                      name="animalTag"
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
                      type="select"
                      name="breed"
                    >

                      <option>
                        Holstein
                      </option>

                      <option>
                        Gir
                      </option>

                      <option>
                        Jersey
                      </option>

                    </Field>

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      Technician
                    </Label>

                    <Field
                      as={Input}
                      name="technician"
                    />

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      Service Date
                    </Label>

                    <Field
                      as={Input}
                      type="date"
                      name="serviceDate"
                    />

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      Status
                    </Label>

                    <Field
                      as={Input}
                      type="select"
                      name="status"
                    >

                      <option>
                        Successful
                      </option>

                      <option>
                        Pending
                      </option>

                      <option>
                        Failed
                      </option>

                    </Field>

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

export default AddAIServiceModal;