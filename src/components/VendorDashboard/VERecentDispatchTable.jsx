import {
  Card,
  CardBody
} from "reactstrap";

const dispatches = [

  {
    dispatchId: "DSP-101",
    batch: "HB-2201",
    breed: "Holstein",
    quantity: 100,
    status: "Delivered"
  },

  {
    dispatchId: "DSP-102",
    batch: "GR-1102",
    breed: "Gir",
    quantity: 80,
    status: "In Transit"
  },

  {
    dispatchId: "DSP-103",
    batch: "JR-4521",
    breed: "Jersey",
    quantity: 120,
    status: "Dispatched"
  }

];

const VERecentDispatchTable = () => {

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <div className="d-flex justify-content-between align-items-center mb-3">

          <h5 className="fw-bold mb-0">

            Recent Dispatches

          </h5>

        </div>

        <div className="table-responsive">

          <table className="table align-middle">

            <thead>

              <tr>

                <th>
                  Dispatch ID
                </th>

                <th>
                  Batch
                </th>

                <th>
                  Breed
                </th>

                <th>
                  Quantity
                </th>

                <th>
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {dispatches.map(
                (item, index) => (

                  <tr key={index}>

                    <td>
                      {item.dispatchId}
                    </td>

                    <td>
                      {item.batch}
                    </td>

                    <td>
                      {item.breed}
                    </td>

                    <td>
                      {item.quantity}
                    </td>

                    <td>

                      <span
                        className={`
                          status-badge

                          ${
                            item.status === "Delivered"
                              ? "success"

                              : item.status === "In Transit"
                                ? "warning"
                                : "primary"
                          }
                        `}
                      >

                        {item.status}

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

export default VERecentDispatchTable;