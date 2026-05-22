import {
  Card,
  CardBody
} from "reactstrap";

const requests = [

  {
    farmer: "Ajit Kumar",
    location: "Jatani",
    breed: "Holstein",
    priority: "High"
  },

  {
    farmer: "Pratap Swain",
    location: "Balianta",
    breed: "Gir",
    priority: "Medium"
  },

  {
    farmer: "Mohan Rout",
    location: "Khordha",
    breed: "Jersey",
    priority: "Low"
  }

];

const PendingRequestList = () => {

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h5 className="fw-bold mb-0">

            Pending Farmer Requests

          </h5>

        </div>

        {requests.map((item, index) => (

          <div
            key={index}
            className="border-bottom pb-3 mb-3"
          >

            <div className="d-flex justify-content-between align-items-start">

              <div>

                <h6 className="fw-bold mb-1">

                  {item.farmer}

                </h6>

                <p className="text-muted mb-1">

                  {item.location}

                </p>

                <span className="badge bg-light text-dark">

                  {item.breed}

                </span>

              </div>

              <div>

                <span
                  className={`
                    badge

                    ${
                      item.priority === "High"
                        ? "bg-danger"

                        : item.priority === "Medium"
                          ? "bg-warning text-dark"

                          : "bg-success"
                    }
                  `}
                >

                  {item.priority}

                </span>

              </div>

            </div>

          </div>

        ))}

      </CardBody>

    </Card>

  );

};

export default PendingRequestList;