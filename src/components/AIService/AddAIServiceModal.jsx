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

    id:
      editData?.id || "",

    farmerName:
      editData?.farmerName || "",

    animalTagId:
      editData?.animalTagId || "",

    breed:
      editData?.breed || "",

    batchNumber:
      editData?.batchNumber || "",

    serviceDate:
      editData?.serviceDate || "",

    technicianName:
      editData?.technicianName || "",

    pregnancyHistory:
      editData?.pregnancyHistory || "",

    remarks:
      editData?.remarks || "",

    status:
      editData?.status || "Completed"

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
                      Animal Tag ID
                    </Label>

                    <Field
                      as={Input}
                      name="animalTagId"
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
                      Batch Number
                    </Label>

                    <Field
                      as={Input}
                      name="batchNumber"
                    />

                  </FormGroup>

                </Col>

                <Col lg="4">

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

                <Col lg="4">

                  <FormGroup>

                    <Label>
                      Technician Name
                    </Label>

                    <Field
                      as={Input}
                      name="technicianName"
                    />

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      Pregnancy History
                    </Label>

                    <Field
                      as={Input}
                      type="textarea"
                      rows="3"
                      name="pregnancyHistory"
                    />

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      Remarks
                    </Label>

                    <Field
                      as={Input}
                      type="textarea"
                      rows="3"
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
                      : "Save Service"
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