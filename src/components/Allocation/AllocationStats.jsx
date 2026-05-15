import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

const stats = [

  {
    title: "Total Allocation",
    value: 12500,
    icon: "bi bi-diagram-3",
    className: "primary"
  },

  {
    title: "District Allocation",
    value: 7200,
    icon: "bi bi-building",
    className: "success"
  },

  {
    title: "Block Allocation",
    value: 4300,
    icon: "bi bi-geo-alt",
    className: "warning"
  },

  {
    title: "Pending Requests",
    value: 85,
    icon: "bi bi-clock-history",
    className: "danger"
  }

];

const AllocationStats = () => {

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

export default AllocationStats;