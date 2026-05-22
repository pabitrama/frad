import {
  Card,
  CardBody
} from "reactstrap";

const timeline = [

  {
    farmer: "Rakesh Das",
    animal: "TAG-1001",
    breed: "Holstein",
    date: "20 May 2026",
    status: "Successful"
  },

  {
    farmer: "Ajit Kumar",
    animal: "TAG-1002",
    breed: "Gir",
    date: "18 May 2026",
    status: "Follow-up"
  },

  {
    farmer: "Sanjay Rout",
    animal: "TAG-1005",
    breed: "Jersey",
    date: "15 May 2026",
    status: "Successful"
  }

];

const ServiceTimelineCard = () => {

  return (

    <Card className="border-0 shadow-sm mb-4">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Recent AI Service Timeline

        </h5>

        <div className="service-timeline d-flex gap-3 flex-wrap">

          {timeline.map((item, index) => (

            <div
              key={index}
              className="timeline-item border-start border-3 ps-3 mb-4"
            >

              <h6 className="fw-bold mb-1">

                {item.farmer}

              </h6>

              <p className="mb-1 text-muted">

                Animal:
                {item.animal}

              </p>

              <p className="mb-1 text-muted">

                Breed:
                {item.breed}

              </p>

              <small className="text-primary fw-bold">

                {item.date}

              </small>

            </div>

          ))}

        </div>

      </CardBody>

    </Card>

  );

};

export default ServiceTimelineCard;