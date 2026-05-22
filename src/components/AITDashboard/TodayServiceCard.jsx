import {
  Card,
  CardBody
} from "reactstrap";

const services = [

  {
    farmer: "Suresh Behera",
    village: "Jatani",
    breed: "Holstein",
    time: "10:30 AM"
  },

  {
    farmer: "Prakash Das",
    village: "Balianta",
    breed: "Gir",
    time: "12:15 PM"
  },

  {
    farmer: "Ranjan Rout",
    village: "Khordha",
    breed: "Jersey",
    time: "03:00 PM"
  }

];

const TodayServiceCard = () => {

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h5 className="fw-bold mb-0">

            Today's Services

          </h5>

          <button className="btn btn-sm btn-primary">

            View All

          </button>

        </div>

        {services.map((item, index) => (

          <div
            key={index}
            className="service-item border-bottom pb-3 mb-3"
          >

            <div className="d-flex justify-content-between align-items-start">

              <div>

                <h6 className="fw-bold mb-1">

                  {item.farmer}

                </h6>

                <p className="text-muted mb-1">

                  {item.village}

                </p>

                <span className="badge bg-light text-dark">

                  {item.breed}

                </span>

              </div>

              <div>

                <small className="text-primary fw-bold">

                  {item.time}

                </small>

              </div>

            </div>

          </div>

        ))}

      </CardBody>

    </Card>

  );

};

export default TodayServiceCard;