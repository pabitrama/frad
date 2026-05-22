import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

const stats = [

  {
    title: "Total Orders",
    value: 420,
    icon: "bi bi-box-seam",
    className: "primary"
  },

  {
    title: "Pending Orders",
    value: 84,
    icon: "bi bi-clock-history",
    className: "warning"
  },

  {
    title: "Dispatched",
    value: 260,
    icon: "bi bi-truck",
    className: "success"
  },

  {
    title: "Delivered",
    value: 190,
    icon: "bi bi-check-circle",
    className: "info"
  }

];

const VendorStatsCards = () => {

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

export default VendorStatsCards;