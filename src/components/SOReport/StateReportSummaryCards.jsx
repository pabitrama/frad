import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

const stats = [

  {
    title: "Total Districts",
    value: 30,
    icon: "bi bi-building",
    className: "primary"
  },

  {
    title: "Total Allocation",
    value: 58240,
    icon: "bi bi-box-seam",
    className: "success"
  },

  {
    title: "Total Utilization",
    value: 51420,
    icon: "bi bi-graph-up-arrow",
    className: "warning"
  },

  {
    title: "Redistributions",
    value: 1240,
    icon: "bi bi-arrow-left-right",
    className: "danger"
  }

];

const StateReportSummaryCards = () => {

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

export default StateReportSummaryCards;