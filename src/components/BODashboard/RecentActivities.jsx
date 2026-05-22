import {
  Card,
  CardBody
} from "reactstrap";

const activities = [

  "120 Holstein allocated to Jatani block",

  "New allocation request approved",

  "Low stock alert generated for Jersey",

  "District allocation updated",

  "Inventory updated by Block Officer"

];

const RecentActivities = () => {

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-3">

          Recent Activities

        </h5>

        <ul className="list-group list-group-flush">

          {activities.map(
            (item, index) => (

              <li
                key={index}
                className="list-group-item px-0"
              >

                <i className="bi bi-dot me-2"></i>

                {item}

              </li>

            )
          )}

        </ul>

      </CardBody>

    </Card>

  );

};

export default RecentActivities;