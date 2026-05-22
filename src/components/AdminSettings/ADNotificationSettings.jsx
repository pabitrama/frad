import {
  Card,
  CardBody,
  FormGroup,
  Input,
  Label
} from "reactstrap";

const ADNotificationSettings = () => {

  return (

    <Card className="border-0 shadow-sm">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Notification Settings

        </h5>

        <FormGroup switch>

          <Input type="switch" />

          <Label check>

            Email Notifications

          </Label>

        </FormGroup>

        <FormGroup switch>

          <Input type="switch" />

          <Label check>

            SMS Notifications

          </Label>

        </FormGroup>

        <FormGroup switch>

          <Input type="switch" />

          <Label check>

            System Alerts

          </Label>

        </FormGroup>

      </CardBody>

    </Card>

  );

};

export default ADNotificationSettings;