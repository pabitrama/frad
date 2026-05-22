import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

const stats = [

  {
    title: "Total Requests",
    value: 420,
    icon: "bi bi-box-arrow-in-down",
    className: "primary"
  },

  {
    title: "Approved",
    value: 310,
    icon: "bi bi-check-circle",
    className: "success"
  },

  {
    title: "Pending",
    value: 82,
    icon: "bi bi-clock-history",
    className: "warning"
  },

  {
    title: "Rejected",
    value: 28,
    icon: "bi bi-x-circle",
    className: "danger"
  }

];

const RestockingStats = () => {

  return (

    <Row className="mb-4">

      {stats.map((item, index) => (

        <Col
          lg="3"
          md="6"
          key={index}
          className="mb-3"
        >

          <Card className="border-0 shadow-sm stat-card">

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

export default RestockingStats;