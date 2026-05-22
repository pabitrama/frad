import {
  Card,
  CardBody
} from "reactstrap";

const stocks = [

  {
    breed: "Holstein",
    available: 48
  },

  {
    breed: "Gir",
    available: 36
  },

  {
    breed: "Jersey",
    available: 28
  },

  {
    breed: "HF Cross",
    available: 33
  }

];

const AssignedStockCard = () => {

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h5 className="fw-bold mb-0">

            Assigned Stock

          </h5>

          <button className="btn btn-sm btn-outline-primary">

            Stock Details

          </button>

        </div>

        {stocks.map((item, index) => (

          <div
            key={index}
            className="d-flex justify-content-between align-items-center py-3 border-bottom"
          >

            <div>

              <h6 className="mb-0">

                {item.breed}

              </h6>

            </div>

            <div>

              <span className="fw-bold text-primary">

                {item.available}

              </span>

            </div>

          </div>

        ))}

      </CardBody>

    </Card>

  );

};

export default AssignedStockCard;
