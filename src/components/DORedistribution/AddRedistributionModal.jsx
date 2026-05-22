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

    id:
      editData?.id || "",

    fromBlock:
      editData?.fromBlock || "",

    toBlock:
      editData?.toBlock || "",

    breed:
      editData?.breed || "",

    quantity:
      editData?.quantity || "",

    transferDate:
      editData?.transferDate || "",

    vehicleNo:
      editData?.vehicleNo || "",

    status:
      editData?.status || "Pending",

    remarks:
      editData?.remarks || ""

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
            : "Create Redistribution"
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
                      From Block
                    </Label>

                    <Field
                      as={Input}
                      type="select"
                      name="fromBlock"
                    >

                      <option>
                        Select
                      </option>

                      <option>
                        Khordha
                      </option>

                      <option>
                        Balipatna
                      </option>

                    </Field>

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      To Block
                    </Label>

                    <Field
                      as={Input}
                      type="select"
                      name="toBlock"
                    >

                      <option>
                        Select
                      </option>

                      <option>
                        Jatani
                      </option>

                      <option>
                        Begunia
                      </option>

                    </Field>

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
                        Select
                      </option>

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
                        Pending
                      </option>

                      <option>
                        In Transit
                      </option>

                      <option>
                        Completed
                      </option>

                    </Field>

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
                      : "Create Transfer"
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