import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

const stats = [

  {
    title: "Total Services",
    value: 245,
    icon: "bi bi-clipboard-data",
    className: "primary"
  },

  {
    title: "Successful AI",
    value: 198,
    icon: "bi bi-check-circle",
    className: "success"
  },

  {
    title: "Follow-up Cases",
    value: 32,
    icon: "bi bi-arrow-repeat",
    className: "warning"
  },

  {
    title: "Failed Cases",
    value: 15,
    icon: "bi bi-x-circle",
    className: "danger"
  }

];

const ServiceHistorySummary = () => {

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

export default ServiceHistorySummary;