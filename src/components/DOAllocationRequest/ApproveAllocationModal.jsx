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

const ApproveAllocationModal = ({

  isOpen,
  toggle,

  data,

  onSubmit

}) => {

  if (!data) return null;

  return (

    <Modal
      isOpen={isOpen}
      toggle={toggle}
      centered
      size="lg"
    >

      <ModalHeader toggle={toggle}>

        Approve Allocation Request

      </ModalHeader>

      <ModalBody>

        <Formik
          initialValues={{

            approvedQuantity:
              data.quantity,

            remarks: ""

          }}

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
                      Block
                    </Label>

                    <Input
                      value={data.block}
                      disabled
                    />

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      Breed
                    </Label>

                    <Input
                      value={data.breed}
                      disabled
                    />

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      Requested Quantity
                    </Label>

                    <Input
                      value={data.quantity}
                      disabled
                    />

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      Approved Quantity
                    </Label>

                    <Field
                      as={Input}
                      name="approvedQuantity"
                    />

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
                  color="success"
                  type="submit"
                >

                  Approve Request

                </Button>

              </div>

            </Form>

          )}

        </Formik>

      </ModalBody>

    </Modal>

  );

};

export default ApproveAllocationModal;