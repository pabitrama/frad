import {
  Card,
  CardBody
} from "reactstrap";

const stockData = [

  {
    breed: "Holstein",
    available: 1200,
    used: 320,
    remaining: 880
  },

  {
    breed: "Gir",
    available: 950,
    used: 280,
    remaining: 670
  },

  {
    breed: "Jersey",
    available: 1100,
    used: 410,
    remaining: 690
  },

  {
    breed: "HF Cross",
    available: 870,
    used: 220,
    remaining: 650
  },

  {
    breed: "Sahiwal",
    available: 1300,
    used: 510,
    remaining: 790
  }

];

const StockAvailabilityTable = () => {

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <div className="d-flex justify-content-between align-items-center mb-3">

          <h5 className="fw-bold mb-0">

            Stock Availability Per Breed

          </h5>

        </div>

        <div className="table-responsive">

          <table className="table align-middle">

            <thead>

              <tr>

                <th>
                  Breed
                </th>

                <th>
                  Available
                </th>

                <th>
                  Used
                </th>

                <th>
                  Remaining
                </th>

              </tr>

            </thead>

            <tbody>

              {stockData.map(
                (item, index) => (

                  <tr key={index}>

                    <td>
                      {item.breed}
                    </td>

                    <td>
                      {item.available}
                    </td>

                    <td>
                      {item.used}
                    </td>

                    <td>

                      <span className="fw-bold text-success">

                        {item.remaining}

                      </span>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </CardBody>

    </Card>

  );

};

export default StockAvailabilityTable;