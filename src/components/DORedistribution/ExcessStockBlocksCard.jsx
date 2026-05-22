import {
  Card,
  CardBody
} from "reactstrap";

const excessStock = [

  {
    block: "Khordha",
    stock: 620
  },

  {
    block: "Balipatna",
    stock: 580
  },

  {
    block: "Tangi",
    stock: 540
  }

];

const ExcessStockBlocksCard = () => {

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Excess Stock Blocks

        </h5>

        {excessStock.map((item, index) => (

          <div
            key={index}
            className="border-bottom pb-3 mb-3"
          >

            <div className="d-flex justify-content-between">

              <span>

                {item.block}

              </span>

              <span className="fw-bold text-success">

                {item.stock}

              </span>

            </div>

          </div>

        ))}

      </CardBody>

    </Card>

  );

};

export default ExcessStockBlocksCard;