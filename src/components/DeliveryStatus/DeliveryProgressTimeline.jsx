import {
  Card,
  CardBody
} from "reactstrap";

const timeline = [

  {
    title: "Shipment Created",
    date: "18 May 2026",
    status: "completed"
  },

  {
    title: "Dispatched From Vendor",
    date: "19 May 2026",
    status: "completed"
  },

  {
    title: "In Transit",
    date: "20 May 2026",
    status: "active"
  },

  {
    title: "Delivered",
    date: "--",
    status: "pending"
  }

];

const DeliveryProgressTimeline = () => {

  return (

    <Card className="border-0 shadow-sm mb-4">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Delivery Progress Timeline

        </h5>

        <div className="delivery-timeline">

          {timeline.map((item, index) => (

            <div
              key={index}
              className="timeline-item"
            >

              <div
                className={`
                  timeline-dot

                  ${item.status}
                `}
              ></div>

              <div className="timeline-content">

                <h6 className="mb-1">

                  {item.title}

                </h6>

                <small className="text-muted">

                  {item.date}

                </small>

              </div>

            </div>

          ))}

        </div>

      </CardBody>

    </Card>

  );

};

export default DeliveryProgressTimeline;