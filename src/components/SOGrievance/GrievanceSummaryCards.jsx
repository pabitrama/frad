import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

const stats = [

  {
    title: "Total Complaints",
    value: 248,
    icon: "bi bi-chat-left-text",
    className: "primary"
  },

  {
    title: "Pending Cases",
    value: 34,
    icon: "bi bi-clock-history",
    className: "warning"
  },

  {
    title: "Resolved Cases",
    value: 196,
    icon: "bi bi-check-circle",
    className: "success"
  },

  {
    title: "Escalated Cases",
    value: 18,
    icon: "bi bi-exclamation-triangle",
    className: "danger"
  }

];

const GrievanceSummaryCards = () => {

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

export default GrievanceSummaryCards;