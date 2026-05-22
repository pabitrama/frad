import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

const stats = [

  {
    title: "Total Technicians",
    value: 42,
    icon: "bi bi-people",
    className: "primary"
  },

  {
    title: "Assigned Doses",
    value: 4280,
    icon: "bi bi-box-seam",
    className: "success"
  },

  {
    title: "Pending Requests",
    value: 126,
    icon: "bi bi-clock-history",
    className: "warning"
  },

  {
    title: "Low Stock Technicians",
    value: 8,
    icon: "bi bi-exclamation-triangle",
    className: "danger"
  }

];

const TechnicianAssignmentStats = () => {

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

export default TechnicianAssignmentStats;