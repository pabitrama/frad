// import React from "react";

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

const AddProcurementModal = ({

  isOpen,
  toggle,

  onSubmit,

  editData

}) => {

  const initialValues = {

    procurementId:
      editData?.procurementId || "",

    vendor:
      editData?.vendor || "",

    breed:
      editData?.breed || "",

    quantity:
      editData?.quantity || "",

    date:
      editData?.date || "",

    status:
      editData?.status || "Pending"

  };

  return (

    <Modal
      isOpen={isOpen}
      toggle={toggle}
      size="lg"
      centered
    >

      <ModalHeader toggle={toggle}>

        {
          editData
            ? "Edit Procurement"
            : "Add Procurement"
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
                      Procurement ID
                    </Label>

                    <Field
                      as={Input}
                      name="procurementId"
                    />

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      Vendor Name
                    </Label>

                    <Field
                      as={Input}
                      name="vendor"
                    />

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      Breed Type
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
                        Jersey
                      </option>

                      <option>
                        Gir
                      </option>

                    </Field>

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
                      Procurement Date
                    </Label>

                    <Field
                      as={Input}
                      type="date"
                      name="date"
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
                        Approved
                      </option>

                      <option>
                        Pending
                      </option>

                      <option>
                        Rejected
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

export default AddProcurementModal;