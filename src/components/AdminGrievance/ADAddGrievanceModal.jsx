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

const ADAddGrievanceModal = ({

  isOpen,
  toggle,

  onSubmit

}) => {

  const initialValues = {

    complainantName: "",
    category: "",
    priority: "Medium",
    mobile: "",
    grievance: ""

  };

  return (

    <Modal
      isOpen={isOpen}
      toggle={toggle}
      centered
      size="lg"
    >

      <ModalHeader toggle={toggle}>

        Add Grievance

      </ModalHeader>

      <ModalBody>

        <Formik
          initialValues={initialValues}
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
                      Complainant Name
                    </Label>

                    <Field
                      as={Input}
                      name="complainantName"
                    />

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      Mobile Number
                    </Label>

                    <Field
                      as={Input}
                      name="mobile"
                    />

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      Category
                    </Label>

                    <Field
                      as={Input}
                      type="select"
                      name="category"
                    >

                      <option>
                        AI Service
                      </option>

                      <option>
                        Stock
                      </option>

                      <option>
                        Delivery
                      </option>

                    </Field>

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      Priority
                    </Label>

                    <Field
                      as={Input}
                      type="select"
                      name="priority"
                    >

                      <option>
                        High
                      </option>

                      <option>
                        Medium
                      </option>

                      <option>
                        Low
                      </option>

                    </Field>

                  </FormGroup>

                </Col>

                <Col lg="12">

                  <FormGroup>

                    <Label>
                      Grievance Details
                    </Label>

                    <Field
                      as={Input}
                      type="textarea"
                      rows="5"
                      name="grievance"
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

                  Submit Grievance

                </Button>

              </div>

            </Form>

          )}

        </Formik>

      </ModalBody>

    </Modal>

  );

};

export default ADAddGrievanceModal;