import {
  Card,
  CardBody
} from "reactstrap";

const lowStockData = [

  {
    breed: "Holstein",
    available: 40
  },

  {
    breed: "Gir",
    available: 22
  },

  {
    breed: "Jersey",
    available: 15
  }

];

const LowStockAlertCard = () => {

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-3">

          Low Stock Alerts

        </h5>

        {lowStockData.map(
          (item, index) => (

            <div
              key={index}
              className="d-flex justify-content-between align-items-center py-2 border-bottom"
            >

              <div>

                <h6 className="mb-0">
                  {item.breed}
                </h6>

              </div>

              <span className="badge bg-danger">

                {item.available}

              </span>

            </div>

          )
        )}

      </CardBody>

    </Card>

  );

};

export default LowStockAlertCard;