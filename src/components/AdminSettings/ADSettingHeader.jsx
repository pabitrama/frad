import {
  Card,
  CardBody
} from "reactstrap";

const ADSettingHeader = () => {

  return (

    <Card className="border-0 shadow-sm mb-4">

      <CardBody>

        <div className="d-flex justify-content-between align-items-center">

          <div>

            <h3 className="fw-bold mb-1">

              System Settings

            </h3>

            <p className="text-muted mb-0">

              Configure system preferences, security and administration settings

            </p>

          </div>

          <button className="btn btn-primary">

            <i className="bi bi-save me-2"></i>

            Save All Settings

          </button>

        </div>

      </CardBody>

    </Card>

  );

};

export default ADSettingHeader;