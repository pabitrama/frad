import {
  Card,
  CardBody,
  Row,
  Col,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const ADDatabaseSettings = () => {

  return (

    <Card className="border-0 shadow-sm">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Database Settings

        </h5>

        <Row>

          <Col lg="6">

            <FormGroup>

              <Label>
                Database Host
              </Label>

              <Input defaultValue="localhost" />

            </FormGroup>

          </Col>

          <Col lg="6">

            <FormGroup>

              <Label>
                Database Name
              </Label>

              <Input defaultValue="ai_management" />

            </FormGroup>

          </Col>

        </Row>

      </CardBody>

    </Card>

  );

};

export default ADDatabaseSettings;