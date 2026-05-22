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

const ADGenerateReportModal = ({

  isOpen,
  toggle,

  onSubmit

}) => {

  const initialValues = {

    reportName: "",
    reportType: "",
    district: "",
    fromDate: "",
    toDate: ""

  };

  return (

    <Modal
      isOpen={isOpen}
      toggle={toggle}
      centered
      size="lg"
    >

      <ModalHeader toggle={toggle}>

        Generate Report

      </ModalHeader>

      <ModalBody>

        <Formik
          initialValues={initialValues}
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
                      Report Name
                    </Label>

                    <Field
                      as={Input}
                      name="reportName"
                    />

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      Report Type
                    </Label>

                    <Field
                      as={Input}
                      type="select"
                      name="reportType"
                    >

                      <option>
                        AI Services
                      </option>

                      <option>
                        Procurement
                      </option>

                      <option>
                        Inventory
                      </option>

                    </Field>

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      From Date
                    </Label>

                    <Field
                      as={Input}
                      type="date"
                      name="fromDate"
                    />

                  </FormGroup>

                </Col>

                <Col lg="6">

                  <FormGroup>

                    <Label>
                      To Date
                    </Label>

                    <Field
                      as={Input}
                      type="date"
                      name="toDate"
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

                  Generate Report

                </Button>

              </div>

            </Form>

          )}

        </Formik>

      </ModalBody>

    </Modal>

  );

};

export default ADGenerateReportModal;