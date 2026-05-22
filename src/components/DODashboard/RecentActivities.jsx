import {
  Card,
  CardBody
} from "reactstrap";

const activities = [

  {
    text: "Jatani Block received 120 Holstein doses",
    time: "10 mins ago"
  },

  {
    text: "Allocation approved for Balianta",
    time: "30 mins ago"
  },

  {
    text: "Low stock alert triggered for Begunia",
    time: "1 hour ago"
  }

];

const RecentActivities = () => {

  return (

    <Card className="border-0 shadow-sm">

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

export default RecentActivities;