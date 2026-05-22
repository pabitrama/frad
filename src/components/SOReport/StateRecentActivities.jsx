import {
  Card,
  CardBody
} from "reactstrap";

const activities = [

  {
    text: "State utilization report exported",
    time: "20 mins ago"
  },

  {
    text: "District redistribution analytics updated",
    time: "1 hour ago"
  },

  {
    text: "Breed demand insights generated",
    time: "3 hours ago"
  }

];

const StateRecentActivities = () => {

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Recent Activities

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

export default StateRecentActivities;