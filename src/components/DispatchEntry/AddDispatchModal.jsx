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

const AddDispatchModal = ({

  isOpen,
  toggle,

  onSubmit,

  editData

}) => {

  const initialValues = {

    dispatchId:
      editData?.dispatchId || "",

    orderId:
      editData?.orderId || "",

    breed:
      editData?.breed || "",

    batchNumber:
      editData?.batchNumber || "",

    quantity:
      editData?.quantity || "",

    dispatchDate:
      editData?.dispatchDate || "",

    vehicleNumber:
      editData?.vehicleNumber || "",

    driverName:
      editData?.driverName || "",

    expectedDelivery:
      editData?.expectedDelivery || "",

    status:
      editData?.status || "Dispatched"

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
            ? "Edit Dispatch"
            : "Add Dispatch Entry"
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
                      Dispatch ID
                    </Label>

                    <Field
                      as={Input}
                      name="dispatchId"
                    />

                  </FormGroup>

                </Col>

                <Col lg="4">

                  <FormGroup>

                    <Label>
                      Order ID
                    </Label>

                    <Field
                      as={Input}
                      name="orderId"
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
                      name="breed"
                    />

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
                      Dispatch Date
                    </Label>

                    <Field
                      as={Input}
                      type="date"
                      name="dispatchDate"
                    />

                  </FormGroup>

                </Col>

                <Col lg="4">

                  <FormGroup>

                    <Label>
                      Vehicle Number
                    </Label>

                    <Field
                      as={Input}
                      name="vehicleNumber"
                    />

                  </FormGroup>

                </Col>

                <Col lg="4">

                  <FormGroup>

                    <Label>
                      Driver Name
                    </Label>

                    <Field
                      as={Input}
                      name="driverName"
                    />

                  </FormGroup>

                </Col>

                <Col lg="4">

                  <FormGroup>

                    <Label>
                      Expected Delivery
                    </Label>

                    <Field
                      as={Input}
                      type="date"
                      name="expectedDelivery"
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
                      : "Save Dispatch"
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

export default AddDispatchModal;