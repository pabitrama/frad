import {
  Card,
  CardBody
} from "reactstrap";

const activities = [

  {
    text: "Monthly utilization report exported",
    time: "10 mins ago"
  },

  {
    text: "Redistribution analytics generated",
    time: "1 hour ago"
  },

  {
    text: "Block-wise performance updated",
    time: "3 hours ago"
  }

];

const RecentReportActivity = () => {

  return (

    <Card className="border-0 shadow-sm mt-4">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Recent Report Activities

        </h5>

        {activities.map((item, index) => (

          <div
            key={index}
            className="border-bottom pb-3 mb-3"
          >

            <p className="mb-1">

              {item.text}

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

export default RecentReportActivity;