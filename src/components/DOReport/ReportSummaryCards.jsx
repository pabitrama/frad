import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

const stats = [

  {
    title: "Total Allocations",
    value: 5420,
    icon: "bi bi-box-seam",
    className: "primary"
  },

  {
    title: "Redistributions",
    value: 182,
    icon: "bi bi-arrow-left-right",
    className: "warning"
  },

  {
    title: "Total Utilization",
    value: 4680,
    icon: "bi bi-graph-up",
    className: "success"
  },

  {
    title: "Active Blocks",
    value: 18,
    icon: "bi bi-building",
    className: "danger"
  }

];

const ReportSummaryCards = () => {

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

export default ReportSummaryCards;