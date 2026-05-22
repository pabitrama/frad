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

const AddAnimalModal = ({

  isOpen,
  toggle,

  onSubmit,

  editData

}) => {

  const initialValues = {

    id:
      editData?.id || "",

    animalTagId:
      editData?.animalTagId || "",

    animalType:
      editData?.animalType || "",

    breed:
      editData?.breed || "",

    age:
      editData?.age || "",

    weight:
      editData?.weight || "",

    healthStatus:
      editData?.healthStatus || "",

    pregnancyStatus:
      editData?.pregnancyStatus || ""

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
            ? "Edit Animal"
            : "Register Animal"
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
                      Animal Type
                    </Label>

                    <Field
                      as={Input}
                      type="select"
                      name="animalType"
                    >

                      <option>
                        Select
                      </option>

                      <option>
                        Cow
                      </option>

                      <option>
                        Buffalo
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

                <Col lg="3">

                  <FormGroup>

                    <Label>
                      Age
                    </Label>

                    <Field
                      as={Input}
                      name="age"
                    />

                  </FormGroup>

                </Col>

                <Col lg="3">

                  <FormGroup>

                    <Label>
                      Weight
                    </Label>

                    <Field
                      as={Input}
                      name="weight"
                    />

                  </FormGroup>

                </Col>

                <Col lg="3">

                  <FormGroup>

                    <Label>
                      Health Status
                    </Label>

                    <Field
                      as={Input}
                      type="select"
                      name="healthStatus"
                    >

                      <option>
                        Select
                      </option>

                      <option>
                        Healthy
                      </option>

                      <option>
                        Under Treatment
                      </option>

                      <option>
                        Sick
                      </option>

                    </Field>

                  </FormGroup>

                </Col>

                <Col lg="3">

                  <FormGroup>

                    <Label>
                      Pregnancy Status
                    </Label>

                    <Field
                      as={Input}
                      type="select"
                      name="pregnancyStatus"
                    >

                      <option>
                        Select
                      </option>

                      <option>
                        Pregnant
                      </option>

                      <option>
                        Not Pregnant
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

export default AddAnimalModal;