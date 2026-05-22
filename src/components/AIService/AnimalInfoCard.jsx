import {
  Card,
  CardBody
} from "reactstrap";

const AnimalInfoCard = ({
  animal
}) => {

  if (!animal) return null;

  return (

    <Card className="border-0 shadow-sm mb-4">

      <CardBody>

        <h5 className="fw-bold mb-3">

          Animal Information

        </h5>

        <div className="row">

          <div className="col-lg-3 mb-3">

            <strong>
              Tag ID
            </strong>

            <div>
              {animal.tagId}
            </div>

          </div>

          <div className="col-lg-3 mb-3">

            <strong>
              Breed
            </strong>

            <div>
              {animal.breed}
            </div>

          </div>

          <div className="col-lg-3 mb-3">

            <strong>
              Age
            </strong>

            <div>
              {animal.age}
            </div>

          </div>

          <div className="col-lg-3 mb-3">

            <strong>
              Pregnancy Status
            </strong>

            <div>
              {animal.pregnancyStatus}
            </div>

          </div>

        </div>

      </CardBody>

    </Card>

  );

};

export default AnimalInfoCard;