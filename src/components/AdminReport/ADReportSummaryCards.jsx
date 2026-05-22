import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

const stats = [

  {
    title: "Total Reports",
    value: 2840,
    icon: "bi bi-file-earmark-text",
    className: "primary"
  },

  {
    title: "Generated Reports",
    value: 2430,
    icon: "bi bi-check-circle",
    className: "success"
  },

  {
    title: "Pending Reports",
    value: 260,
    icon: "bi bi-clock-history",
    className: "warning"
  },

  {
    title: "Failed Reports",
    value: 150,
    icon: "bi bi-x-circle",
    className: "danger"
  }

];

const ADReportSummaryCards = () => {

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

export default ADReportSummaryCards;