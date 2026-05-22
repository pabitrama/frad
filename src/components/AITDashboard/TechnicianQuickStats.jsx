import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

const stats = [

  {
    title: "Today's Services",
    value: 18,
    icon: "bi bi-clipboard-check",
    className: "primary"
  },

  {
    title: "Pending Requests",
    value: 12,
    icon: "bi bi-clock-history",
    className: "warning"
  },

  {
    title: "Available Doses",
    value: 145,
    icon: "bi bi-box-seam",
    className: "success"
  },

  {
    title: "Low Stock Alerts",
    value: 3,
    icon: "bi bi-exclamation-triangle",
    className: "danger"
  }

];

const TechnicianQuickStats = () => {

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

export default TechnicianQuickStats;