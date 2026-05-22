import {
  Card,
  CardBody
} from "reactstrap";

const logs = [

  {
    action: "Updated System Settings",
    time: "10 mins ago"
  },

  {
    action: "Generated Report",
    time: "1 hour ago"
  },

  {
    action: "Resolved Grievance",
    time: "3 hours ago"
  }

];

const ADActivityLogs = () => {

  return (

    <Card className="border-0 shadow-sm">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Activity Logs

        </h5>

        {logs.map((item, index) => (

          <div
            key={index}
            className="border-bottom pb-3 mb-3"
          >

            <p className="mb-1">

              {item.action}

            </p>

            <small className="text-muted">

              {item.time}

            </small>

          </div>

        ))}

      </CardBody>

    </Card>

  );

};

export default ADActivityLogs;