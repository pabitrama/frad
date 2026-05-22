import {
  Card,
  CardBody
} from "reactstrap";

const grievances = [

  {
    id: "GRV-1021",
    district: "Khordha",
    issue: "Delayed stock dispatch"
  },

  {
    id: "GRV-1034",
    district: "Puri",
    issue: "Technician shortage"
  },

  {
    id: "GRV-1048",
    district: "Cuttack",
    issue: "Allocation mismatch"
  }

];

const PendingCriticalGrievances = () => {

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Critical Pending Complaints

        </h5>

        {grievances.map((item, index) => (

          <div
            key={index}
            className="border-bottom pb-3 mb-3"
          >

            <h6 className="fw-bold mb-1">

              {item.id}

            </h6>

            <p className="mb-1 text-muted">

              {item.district}

            </p>

            <small className="text-danger">

              {item.issue}

            </small>

          </div>

        ))}

      </CardBody>

    </Card>

  );

};

export default PendingCriticalGrievances;