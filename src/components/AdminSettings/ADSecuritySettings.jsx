import {
  Card,
  CardBody,
  Row,
  Col,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const ADSecuritySettings = () => {

  return (

    <Card className="border-0 shadow-sm">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Security Settings

        </h5>

        <Row>

          <Col lg="6">

            <FormGroup>

              <Label>
                Current Password
              </Label>

              <Input type="password" />

            </FormGroup>

          </Col>

          <Col lg="6">

            <FormGroup>

              <Label>
                New Password
              </Label>

              <Input type="password" />

            </FormGroup>

          </Col>

          <Col lg="6">

            <FormGroup>

              <Label>
                Confirm Password
              </Label>

              <Input type="password" />

            </FormGroup>

          </Col>

        </Row>

      </CardBody>

    </Card>

  );

};

export default ADSecuritySettings;