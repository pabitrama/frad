import {
  Card,
  CardBody,
  Row,
  Col,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import CustomButton from "../common/Button/CustomButton";

const AnimalRegistrationFilters = ({

  search,
  setSearch

}) => {

  return (

    <Card className="border-0 shadow-sm mb-4">

      <CardBody>

        <Row>

          <Col lg="4">

            <FormGroup>

              <Label>
                Search Animal
              </Label>

              <Input
                type="text"
                placeholder="Search Tag ID"
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
              />

            </FormGroup>

          </Col>

          <Col lg="3">

            <FormGroup>

              <Label>
                Animal Type
              </Label>

              <Input type="select">

                <option>
                  All
                </option>

                <option>
                  Cow
                </option>

                <option>
                  Buffalo
                </option>

              </Input>

            </FormGroup>

          </Col>

          <Col lg="3">

            <FormGroup>

              <Label>
                Health Status
              </Label>

              <Input type="select">

                <option>
                  All
                </option>

                <option>
                  Healthy
                </option>

                <option>
                  Under Treatment
                </option>

              </Input>

            </FormGroup>

          </Col>

          <Col lg="2" className="d-flex align-items-end" >
            <FormGroup>

                <CustomButton
                    text="Search"
                    variant="secondary"
                    icon="bi bi-funnel"
                    fullWidth={true}
                />
            </FormGroup>
          </Col>

        </Row>

      </CardBody>

    </Card>

  );

};

export default AnimalRegistrationFilters;