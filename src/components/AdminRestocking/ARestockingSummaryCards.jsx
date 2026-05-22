import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

const stats = [

  {
    title: "Total Restocking",
    value: 2480,
    icon: "bi bi-box-seam",
    className: "primary"
  },

  {
    title: "Pending Requests",
    value: 182,
    icon: "bi bi-clock-history",
    className: "warning"
  },

  {
    title: "Completed Deliveries",
    value: 2018,
    icon: "bi bi-check-circle",
    className: "success"
  },

  {
    title: "Critical Alerts",
    value: 24,
    icon: "bi bi-exclamation-triangle",
    className: "danger"
  }

];

const ARestockingSummaryCards = () => {

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

export default ARestockingSummaryCards;