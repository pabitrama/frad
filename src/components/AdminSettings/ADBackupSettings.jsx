import {
  Card,
  CardBody
} from "reactstrap";

const ADBackupSettings = () => {

  return (

    <Card className="border-0 shadow-sm">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Backup & Restore

        </h5>

        <div className="d-flex gap-3">

          <button className="btn btn-primary">

            Backup Database

          </button>

          <button className="btn btn-warning">

            Restore Backup

          </button>

        </div>

      </CardBody>

    </Card>

  );

};

export default ADBackupSettings;