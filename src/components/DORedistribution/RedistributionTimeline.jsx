import {
  Card,
  CardBody
} from "reactstrap";

const timeline = [

  {
    from: "Khordha",
    to: "Jatani",
    quantity: 120,
    time: "20 mins ago"
  },

  {
    from: "Balipatna",
    to: "Begunia",
    quantity: 80,
    time: "1 hour ago"
  },

  {
    from: "Tangi",
    to: "Balianta",
    quantity: 150,
    time: "2 hours ago"
  }

];

const RedistributionTimeline = () => {

  return (

    <Card className="border-0 shadow-sm mt-4">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Recent Redistribution Activity

        </h5>

        {timeline.map((item, index) => (

          <div
            key={index}
            className="border-bottom pb-3 mb-3"
          >

            <div className="d-flex justify-content-between">

              <div>

                <h6 className="fw-bold mb-1">

                  {item.from}
                  {" → "}
                  {item.to}

                </h6>

                <p className="text-muted mb-0">

                  Quantity:
                  {item.quantity}

                </p>

              </div>

              <small className="text-muted">

                {item.time}

              </small>

            </div>

          </div>

        ))}

      </CardBody>

    </Card>

  );

};

export default RedistributionTimeline;