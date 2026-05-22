import {
  Card,
  CardBody,
  Row,
  Col,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const ADSystemSettings = () => {

  return (

    <Card className="border-0 shadow-sm">

      <CardBody>

        <h5 className="fw-bold mb-4">

          System Settings

        </h5>

        <Row>

          <Col lg="6">

            <FormGroup>

              <Label>
                System Name
              </Label>

              <Input
                defaultValue="AI Management System"
              />

            </FormGroup>

          </Col>

          <Col lg="6">

            <FormGroup>

              <Label>
                Time Zone
              </Label>

              <Input type="select">

                <option>
                  Asia/Kolkata
                </option>

              </Input>

            </FormGroup>

          </Col>

        </Row>

      </CardBody>

    </Card>

  );

};

export default ADSystemSettings;