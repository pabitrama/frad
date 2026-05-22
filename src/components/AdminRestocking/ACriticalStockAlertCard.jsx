import {
  Card,
  CardBody
} from "reactstrap";

const alerts = [

  {
    district: "Khordha",
    breed: "Holstein",
    stock: 42
  },

  {
    district: "Puri",
    breed: "Gir",
    stock: 28
  },

  {
    district: "Cuttack",
    breed: "Jersey",
    stock: 36
  }

];

const ACriticalStockAlertCard = () => {

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Critical Stock Alerts

        </h5>

        {alerts.map((item, index) => (

          <div
            key={index}
            className="border-bottom pb-3 mb-3"
          >

            <div className="d-flex justify-content-between">

              <div>

                <h6 className="fw-bold mb-1">

                  {item.district}

                </h6>

                <small className="text-muted">

                  {item.breed}

                </small>

              </div>

              <span className="text-danger fw-bold">

                {item.stock}

              </span>

            </div>

          </div>

        ))}

      </CardBody>

    </Card>

  );

};

export default ACriticalStockAlertCard;