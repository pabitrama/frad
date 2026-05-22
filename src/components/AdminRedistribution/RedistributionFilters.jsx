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

const RedistributionFilters = ({

  search,
  setSearch

}) => {

  return (

    <Card className="border-0 shadow-sm mb-4">

      <CardBody>

        <Row>

          <Col lg="3">

            <FormGroup>

              <Label>
                Search Redistribution
              </Label>

              <Input
                type="text"
                placeholder="Search District / Breed"
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
              />

            </FormGroup>

          </Col>

          <Col lg="2">

            <FormGroup>

              <Label>
                From District
              </Label>

              <Input type="select">

                <option>
                  All
                </option>

                <option>
                  Khordha
                </option>

                <option>
                  Puri
                </option>

              </Input>

            </FormGroup>

          </Col>

          <Col lg="2">

            <FormGroup>

              <Label>
                To District
              </Label>

              <Input type="select">

                <option>
                  All
                </option>

                <option>
                  Cuttack
                </option>

                <option>
                  Sambalpur
                </option>

              </Input>

            </FormGroup>

          </Col>

          <Col lg="2">

            <FormGroup>

              <Label>
                Status
              </Label>

              <Input type="select">

                <option>
                  All
                </option>

                <option>
                  Pending
                </option>

                <option>
                  In Transit
                </option>

                <option>
                  Completed
                </option>

              </Input>

            </FormGroup>

          </Col>
          <Col lg="3" className="d-flex align-items-end" >
            <FormGroup>

                <CustomButton
                    text="Search Transfers"
                    variant="secondary"
                    icon="bi bi-search"
                    fullWidth={true}
                />
            </FormGroup>
          </Col>

        </Row>

      </CardBody>

    </Card>

  );

};

export default RedistributionFilters;