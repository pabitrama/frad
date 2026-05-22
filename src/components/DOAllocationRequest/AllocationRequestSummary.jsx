import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

const stats = [

  {
    title: "Pending Requests",
    value: 18,
    icon: "bi bi-clock-history",
    className: "warning"
  },

  {
    title: "Approved Requests",
    value: 52,
    icon: "bi bi-check-circle",
    className: "success"
  },

  {
    title: "Rejected Requests",
    value: 4,
    icon: "bi bi-x-circle",
    className: "danger"
  },

  {
    title: "Total Requested Doses",
    value: 5420,
    icon: "bi bi-box-seam",
    className: "primary"
  }

];

const AllocationRequestSummary = () => {

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

export default AllocationRequestSummary;