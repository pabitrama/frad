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

const AddStockDistributionModal = ({

  isOpen,
  toggle,

  onSubmit,

  editData

}) => {

  const initialValues = {

    distributionId:
      editData?.distributionId || "",

    district:
      editData?.district || "",

    block:
      editData?.block || "",

    breed:
      editData?.breed || "",

    quantity:
      editData?.quantity || "",

    distributionDate:
      editData?.distributionDate || "",

    status:
      editData?.status || "Delivered"

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
            ? "Edit Distribution"
            : "Add Stock Distribution"
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
                      Distribution ID
                    </Label>

                    <Field
                      as={Input}
                      name="distributionId"
                    />

                  </FormGroup>

                </Col>

                <Col lg="6">

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

                <Col lg="6">

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

                <Col lg="6">

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
                      Distribution Date
                    </Label>

                    <Field
                      as={Input}
                      type="date"
                      name="distributionDate"
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

export default AddStockDistributionModal;