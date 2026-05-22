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

const AddFarmerModal = ({

  isOpen,
  toggle,

  onSubmit,

  editData

}) => {

  const initialValues = {

    id:
      editData?.id || "",

    farmerName:
      editData?.farmerName || "",

    aadhaar:
      editData?.aadhaar || "",

    mobile:
      editData?.mobile || "",

    gender:
      editData?.gender || "Male",

    district:
      editData?.district || "",

    block:
      editData?.block || "",

    village:
      editData?.village || "",

    address:
      editData?.address || "",

    status:
      editData?.status || "Active"

  };

  return (

    <Modal
      isOpen={isOpen}
      toggle={toggle}
      size="xl"
      centered
    >

      <ModalHeader toggle={toggle}>

        {
          editData
            ? "Edit Farmer"
            : "Register Farmer"
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

                <Col lg="4">

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

                <Col lg="4">

                  <FormGroup>

                    <Label>
                      Aadhaar Number
                    </Label>

                    <Field
                      as={Input}
                      name="aadhaar"
                    />

                  </FormGroup>

                </Col>

                <Col lg="4">

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

                <Col lg="4">

                  <FormGroup>

                    <Label className="d-block">

                      Gender

                    </Label>

                    <div className="d-flex gap-3">

                      <FormGroup check>

                        <Label check>

                          <Field
                            type="radio"
                            name="gender"
                            value="Male"
                          />

                          Male

                        </Label>

                      </FormGroup>

                      <FormGroup check>

                        <Label check>

                          <Field
                            type="radio"
                            name="gender"
                            value="Female"
                          />

                          Female

                        </Label>

                      </FormGroup>

                    </div>

                  </FormGroup>

                </Col>

                <Col lg="4">

                  <FormGroup>

                    <Label>
                      District
                    </Label>

                    <Field
                      as={Input}
                      type="select"
                      name="district"
                    >

                      <option>
                        Select
                      </option>

                      <option>
                        Khordha
                      </option>

                      <option>
                        Cuttack
                      </option>

                    </Field>

                  </FormGroup>

                </Col>

                <Col lg="4">

                  <FormGroup>

                    <Label>
                      Block
                    </Label>

                    <Field
                      as={Input}
                      type="select"
                      name="block"
                    >

                      <option>
                        Select
                      </option>

                      <option>
                        Jatani
                      </option>

                      <option>
                        Balianta
                      </option>

                    </Field>

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      Village
                    </Label>

                    <Field
                      as={Input}
                      type="select"
                      name="village"
                    >

                      <option>
                        Select
                      </option>

                      <option>
                        Village 1
                      </option>

                      <option>
                        Village 2
                      </option>

                    </Field>

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      Address
                    </Label>

                    <Field
                      as={Input}
                      type="textarea"
                      rows="3"
                      name="address"
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
                      : "Register"
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

export default AddFarmerModal;