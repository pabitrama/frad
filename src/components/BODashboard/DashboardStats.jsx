import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

const stats = [

  {
    title: "Total Available Stock",
    value: 5420,
    icon: "bi bi-box-seam",
    className: "primary"
  },

  {
    title: "Total Breed Used",
    value: 1840,
    icon: "bi bi-bar-chart",
    className: "success"
  },

  {
    title: "Pending Requests",
    value: 24,
    icon: "bi bi-clock-history",
    className: "warning"
  },

  {
    title: "Low Stock Alerts",
    value: 7,
    icon: "bi bi-exclamation-triangle",
    className: "danger"
  }

];

const DashboardStats = () => {

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

export default DashboardStats;