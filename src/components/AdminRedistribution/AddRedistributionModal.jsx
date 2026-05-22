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

const AddRedistributionModal = ({

  isOpen,
  toggle,

  onSubmit,

  editData

}) => {

  const initialValues = {

    fromDistrict:
      editData?.fromDistrict || "",

    toDistrict:
      editData?.toDistrict || "",

    breed:
      editData?.breed || "",

    quantity:
      editData?.quantity || "",

    priority:
      editData?.priority || "Medium",

    transferDate:
      editData?.transferDate || "",

    vehicleNo:
      editData?.vehicleNo || "",

    status:
      editData?.status || "Pending"

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
            ? "Edit Redistribution"
            : "Add Redistribution"
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
                      From District
                    </Label>

                    <Field
                      as={Input}
                      name="fromDistrict"
                    />

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      To District
                    </Label>

                    <Field
                      as={Input}
                      name="toDistrict"
                    />

                  </FormGroup>

                </Col>

                <Col lg="4">

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

                <Col lg="4">

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

                <Col lg="4">

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

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      Transfer Date
                    </Label>

                    <Field
                      as={Input}
                      type="date"
                      name="transferDate"
                    />

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      Vehicle Number
                    </Label>

                    <Field
                      as={Input}
                      name="vehicleNo"
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

export default AddRedistributionModal;