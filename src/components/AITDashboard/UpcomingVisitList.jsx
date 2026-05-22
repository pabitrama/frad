import {
  Card,
  CardBody
} from "reactstrap";

const visits = [

  {
    village: "Jatani",
    date: "20 May 2026",
    time: "09:30 AM"
  },

  {
    village: "Balianta",
    date: "20 May 2026",
    time: "12:00 PM"
  },

  {
    village: "Khordha",
    date: "21 May 2026",
    time: "10:00 AM"
  }

];

const UpcomingVisitList = () => {

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h5 className="fw-bold mb-0">

            Upcoming Visits

          </h5>

        </div>

        {visits.map((item, index) => (

          <div
            key={index}
            className="visit-item border-bottom pb-3 mb-3"
          >

            <h6 className="fw-bold mb-1">

              {item.village}

            </h6>

            <p className="text-muted mb-1">

              {item.date}

            </p>

            <small className="text-primary fw-bold">

              {item.time}

            </small>

          </div>

        ))}

      </CardBody>

    </Card>

  );

};

export default UpcomingVisitList;