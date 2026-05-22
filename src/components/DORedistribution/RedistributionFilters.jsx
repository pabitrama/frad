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

          <Col lg="4">

            <FormGroup>

              <Label>
                Search Redistribution
              </Label>

              <Input
                type="text"
                placeholder="Search Block"
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
                Transfer Status
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

          <Col lg="3">

            <FormGroup>

              <Label>
                Breed
              </Label>

              <Input type="select">

                <option>
                  All Breeds
                </option>

                <option>
                  Holstein
                </option>

                <option>
                  Gir
                </option>

                <option>
                  Jersey
                </option>

              </Input>

            </FormGroup>

          </Col>

          <Col lg="2" className="d-flex align-items-end" >
            <FormGroup>

                <CustomButton
                    text="Search"
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