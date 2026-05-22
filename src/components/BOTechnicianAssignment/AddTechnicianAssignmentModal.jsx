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

const AddTechnicianAssignmentModal = ({

  isOpen,
  toggle,

  onSubmit,

  editData

}) => {

  const initialValues = {

    assignmentId:
      editData?.assignmentId || "",

    technician:
      editData?.technician || "",

    serviceArea:
      editData?.serviceArea || "",

    dailyCapacity:
      editData?.dailyCapacity || "",

    pendingRequests:
      editData?.pendingRequests || "",

    breedDemand:
      editData?.breedDemand || "",

    batchNumber:
      editData?.batchNumber || "",

    assignedQuantity:
      editData?.assignedQuantity || "",

    serviceSchedule:
      editData?.serviceSchedule || "",

    status:
      editData?.status || "Assigned"

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
            ? "Edit Assignment"
            : "Assign Technician"
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
                      Technician
                    </Label>

                    <Field
                      as={Input}
                      name="technician"
                    />

                  </FormGroup>

                </Col>

                <Col lg="4">

                  <FormGroup>

                    <Label>
                      Service Area
                    </Label>

                    <Field
                      as={Input}
                      name="serviceArea"
                    />

                  </FormGroup>

                </Col>

                <Col lg="4">

                  <FormGroup>

                    <Label>
                      Daily Capacity
                    </Label>

                    <Field
                      as={Input}
                      name="dailyCapacity"
                    />

                  </FormGroup>

                </Col>

                <Col lg="4">

                  <FormGroup>

                    <Label>
                      Pending Farmer Requests
                    </Label>

                    <Field
                      as={Input}
                      name="pendingRequests"
                    />

                  </FormGroup>

                </Col>

                <Col lg="4">

                  <FormGroup>

                    <Label>
                      Breed Demand
                    </Label>

                    <Field
                      as={Input}
                      name="breedDemand"
                    />

                  </FormGroup>

                </Col>

                <Col lg="4">

                  <FormGroup>

                    <Label>
                      Dose Batch Number
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
                      Assigned Quantity
                    </Label>

                    <Field
                      as={Input}
                      name="assignedQuantity"
                    />

                  </FormGroup>

                </Col>

                <Col lg="4">

                  <FormGroup>

                    <Label>
                      Service Schedule
                    </Label>

                    <Field
                      as={Input}
                      type="date"
                      name="serviceSchedule"
                    />

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
                        Assigned
                      </option>

                      <option>
                        Pending
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
                      : "Assign"
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

export default AddTechnicianAssignmentModal;