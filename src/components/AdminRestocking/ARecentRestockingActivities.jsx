import {
  Card,
  CardBody
} from "reactstrap";

const activities = [

  {
    text: "Khordha district restocking approved",
    time: "20 mins ago"
  },

  {
    text: "Emergency Gir stock dispatched",
    time: "1 hour ago"
  },

  {
    text: "Puri district stock updated",
    time: "3 hours ago"
  }

];

const ARecentRestockingActivities = () => {

  return (

    <Card className="border-0 shadow-sm mt-4">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Recent Restocking Activities

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

export default ARecentRestockingActivities;