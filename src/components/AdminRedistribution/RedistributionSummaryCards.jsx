import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

const stats = [

  {
    title: "Total Transfers",
    value: 1820,
    icon: "bi bi-arrow-left-right",
    className: "primary"
  },

  {
    title: "Pending Transfers",
    value: 142,
    icon: "bi bi-clock-history",
    className: "warning"
  },

  {
    title: "Completed Transfers",
    value: 1548,
    icon: "bi bi-check-circle",
    className: "success"
  },

  {
    title: "Emergency Requests",
    value: 38,
    icon: "bi bi-exclamation-triangle",
    className: "danger"
  }

];

const RedistributionSummaryCards = () => {

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

export default RedistributionSummaryCards;