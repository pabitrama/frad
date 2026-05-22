import {
  Card,
  CardBody
} from "reactstrap";

const requests = [

  {
    block: "Jatani",
    breed: "Holstein",
    quantity: 120
  },

  {
    block: "Balianta",
    breed: "Gir",
    quantity: 80
  },

  {
    block: "Begunia",
    breed: "Jersey",
    quantity: 150
  }

];

const PendingRequestCard = () => {

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h5 className="fw-bold mb-0">

            Pending Requests

          </h5>

          <button className="btn btn-sm btn-primary">

            View All

          </button>

        </div>

        {requests.map((item, index) => (

          <div
            key={index}
            className="border-bottom pb-3 mb-3"
          >

            <div className="d-flex justify-content-between align-items-start">

              <div>

                <h6 className="fw-bold mb-1">

                  {item.block}

                </h6>

                <p className="text-muted mb-1">

                  {item.breed}

                </p>

              </div>

              <div>

                <span className="fw-bold text-primary">

                  {item.quantity}

                </span>

              </div>

            </div>

          </div>

        ))}

      </CardBody>

    </Card>

  );

};

export default PendingRequestCard;