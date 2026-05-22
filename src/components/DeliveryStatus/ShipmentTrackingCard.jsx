import {
  Card,
  CardBody
} from "reactstrap";

import DeliveryStatusBadge
from "./DeliveryStatusBadge";

const ShipmentTrackingCard = ({
  item
}) => {

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <div className="d-flex justify-content-between align-items-start mb-3">

          <div>

            <h5 className="fw-bold mb-1">

              {item.trackingId}

            </h5>

            <p className="text-muted mb-0">

              {item.destination}

            </p>

          </div>

          <DeliveryStatusBadge
            status={item.status}
          />

        </div>

        <div className="mb-2">

          <strong>
            Batch:
          </strong>

          <span className="ms-2">

            {item.batch}

          </span>

        </div>

        <div className="mb-2">

          <strong>
            Breed:
          </strong>

          <span className="ms-2">

            {item.breed}

          </span>

        </div>

        <div className="mb-2">

          <strong>
            Quantity:
          </strong>

          <span className="ms-2">

            {item.quantity}

          </span>

        </div>

        <div>

          <strong>
            ETA:
          </strong>

          <span className="ms-2">

            {item.eta}

          </span>

        </div>

      </CardBody>

    </Card>

  );

};

export default ShipmentTrackingCard;