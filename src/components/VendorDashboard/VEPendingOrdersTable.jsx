import {
  Card,
  CardBody
} from "reactstrap";

const orders = [

  {
    orderId: "ORD-1001",
    breed: "Holstein",
    quantity: 120,
    date: "2026-05-12",
    status: "Pending"
  },

  {
    orderId: "ORD-1002",
    breed: "Gir",
    quantity: 80,
    date: "2026-05-13",
    status: "Pending"
  },

  {
    orderId: "ORD-1003",
    breed: "Jersey",
    quantity: 140,
    date: "2026-05-14",
    status: "Pending"
  }

];

const VEPendingOrdersTable = () => {

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <div className="d-flex justify-content-between align-items-center mb-3">

          <h5 className="fw-bold mb-0">

            Pending Supply Orders

          </h5>

        </div>

        <div className="table-responsive">

          <table className="table align-middle">

            <thead>

              <tr>

                <th>
                  Order ID
                </th>

                <th>
                  Breed
                </th>

                <th>
                  Quantity
                </th>

                <th>
                  Order Date
                </th>

                <th>
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {orders.map(
                (item, index) => (

                  <tr key={index}>

                    <td>
                      {item.orderId}
                    </td>

                    <td>
                      {item.breed}
                    </td>

                    <td>
                      {item.quantity}
                    </td>

                    <td>
                      {item.date}
                    </td>

                    <td>

                      <span className="status-badge warning">

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

export default VEPendingOrdersTable;