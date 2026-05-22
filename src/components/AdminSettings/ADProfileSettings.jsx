import {
  Card,
  CardBody,
  Row,
  Col,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const ADProfileSettings = () => {

  return (

    <Card className="border-0 shadow-sm">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Profile Settings

        </h5>

        <Row>

          <Col lg="6">

            <FormGroup>

              <Label>
                Full Name
              </Label>

              <Input
                type="text"
                defaultValue="Admin User"
              />

            </FormGroup>

          </Col>

          <Col lg="6">

            <FormGroup>

              <Label>
                Email Address
              </Label>

              <Input
                type="email"
                defaultValue="admin@gmail.com"
              />

            </FormGroup>

          </Col>

          <Col lg="6">

            <FormGroup>

              <Label>
                Mobile Number
              </Label>

              <Input
                type="text"
                defaultValue="9876543210"
              />

            </FormGroup>

          </Col>

          <Col lg="6">

            <FormGroup>

              <Label>
                Profile Photo
              </Label>

              <Input type="file" />

            </FormGroup>

          </Col>

        </Row>

      </CardBody>

    </Card>

  );

};

export default ADProfileSettings;