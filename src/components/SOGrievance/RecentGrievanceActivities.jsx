import {
  Card,
  CardBody
} from "reactstrap";

const activities = [

  {
    text: "Complaint GRV-1021 resolved",
    time: "20 mins ago"
  },

  {
    text: "New technician complaint received",
    time: "1 hour ago"
  },

  {
    text: "Allocation grievance escalated",
    time: "2 hours ago"
  }

];

const RecentGrievanceActivities = () => {

  return (

    <Card className="border-0 shadow-sm mt-4">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Recent Complaint Activities

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

export default RecentGrievanceActivities;