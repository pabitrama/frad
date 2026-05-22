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

    status:
      editData?.status || "Active"

  };

  return (

    <Modal
      isOpen={isOpen}
      toggle={toggle}
      centered
      size="xl"
    >

      <ModalHeader toggle={toggle}>

        {
          editData
            ? "Edit Farmer"
            : "Add Farmer"
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

                    <Label>
                      Gender
                    </Label>

                    <Field
                      as={Input}
                      type="select"
                      name="gender"
                    >

                      <option>
                        Male
                      </option>

                      <option>
                        Female
                      </option>

                    </Field>

                  </FormGroup>

                </Col>

                <Col lg="4">

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
                        Active
                      </option>

                      <option>
                        Pending
                      </option>

                      <option>
                        Inactive
                      </option>

                    </Field>

                  </FormGroup>

                </Col>

                <Col lg="4">

                  <FormGroup>

                    <Label>
                      District
                    </Label>

                    <Field
                      as={Input}
                      name="district"
                    />

                  </FormGroup>

                </Col>

                <Col lg="4">

                  <FormGroup>

                    <Label>
                      Block
                    </Label>

                    <Field
                      as={Input}
                      name="block"
                    />

                  </FormGroup>

                </Col>

                <Col lg="4">

                  <FormGroup>

                    <Label>
                      Village
                    </Label>

                    <Field
                      as={Input}
                      name="village"
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

export default AddFarmerModal;