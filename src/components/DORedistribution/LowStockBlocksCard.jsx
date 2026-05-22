import {
  Card,
  CardBody
} from "reactstrap";

const lowStock = [

  {
    block: "Jatani",
    stock: 80
  },

  {
    block: "Begunia",
    stock: 65
  },

  {
    block: "Balianta",
    stock: 55
  }

];

const LowStockBlocksCard = () => {

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Low Stock Blocks

        </h5>

        {lowStock.map((item, index) => (

          <div
            key={index}
            className="border-bottom pb-3 mb-3"
          >

            <div className="d-flex justify-content-between">

              <span>

                {item.block}

              </span>

              <span className="fw-bold text-danger">

                {item.stock}

              </span>

            </div>

          </div>

        ))}

      </CardBody>

    </Card>

  );

};

export default LowStockBlocksCard;