import {
  Card,
  CardBody,
  Row,
  Col
} from "reactstrap";

const themes = [

  "Light",
  "Dark",
  "Orange",
  "Blue"

];

const ADThemeSettings = () => {

  return (

    <Card className="border-0 shadow-sm">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Theme Settings

        </h5>

        <Row>

          {themes.map((theme, index) => (

            <Col
              lg="3"
              key={index}
            >

              <div className="theme-card text-center p-4 border rounded">

                <h6>

                  {theme}

                </h6>

                <button className="btn btn-primary btn-sm mt-3">

                  Apply

                </button>

              </div>

            </Col>

          ))}

        </Row>

      </CardBody>

    </Card>

  );

};

export default ADThemeSettings;