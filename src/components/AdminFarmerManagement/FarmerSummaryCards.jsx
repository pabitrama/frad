import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

const stats = [

  {
    title: "Total Farmers",
    value: 12840,
    icon: "bi bi-people",
    className: "primary"
  },

  {
    title: "Active Farmers",
    value: 11420,
    icon: "bi bi-person-check",
    className: "success"
  },

  {
    title: "Pending Verification",
    value: 620,
    icon: "bi bi-clock-history",
    className: "warning"
  },

  {
    title: "Inactive Farmers",
    value: 800,
    icon: "bi bi-person-x",
    className: "danger"
  }

];

const FarmerSummaryCards = () => {

  return (

    <Row className="mb-4">

      {stats.map((item, index) => (

        <Col
          lg="3"
          md="6"
          key={index}
          className="mb-3"
        >

          <Card className="border-0 shadow-sm h-100">

            <CardBody>

              <div className="d-flex justify-content-between align-items-center">

                <div>

                  <p className="text-muted mb-1">

                    {item.title}

                  </p>

                  <h3 className="fw-bold mb-0">

                    {item.value}

                  </h3>

                </div>

                <div
                  className={`
                    stat-icon
                    ${item.className}
                  `}
                >

                  <i className={item.icon}></i>

                </div>

              </div>

            </CardBody>

          </Card>

        </Col>

      ))}

    </Row>

  );

};

export default FarmerSummaryCards;