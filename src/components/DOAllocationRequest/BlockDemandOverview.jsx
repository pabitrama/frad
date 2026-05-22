import {
  Card,
  CardBody
} from "reactstrap";

const blocks = [

  {
    block: "Jatani",
    demand: 420
  },

  {
    block: "Balianta",
    demand: 360
  },

  {
    block: "Begunia",
    demand: 520
  }

];

const BlockDemandOverview = () => {

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Block Demand Overview

        </h5>

        {blocks.map((item, index) => (

          <div
            key={index}
            className="mb-4"
          >

            <div className="d-flex justify-content-between mb-2">

              <span>
                {item.block}
              </span>

              <span className="fw-bold">

                {item.demand}
              </span>

            </div>

            <div className="progress">

              <div
                className="progress-bar"
                style={{
                  width: `${item.demand / 6}%`
                }}
              ></div>

            </div>

          </div>

        ))}

      </CardBody>

    </Card>

  );

};

export default BlockDemandOverview;