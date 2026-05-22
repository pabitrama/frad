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

const AIServicesFilters = ({

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
                Search
              </Label>

              <Input
                type="text"
                placeholder="Search Farmer / Tag ID"
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
                District
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
                Breed
              </Label>

              <Input type="select">

                <option>
                  All
                </option>

                <option>
                  Holstein
                </option>

                <option>
                  Gir
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
                  Successful
                </option>

                <option>
                  Pending
                </option>

                <option>
                  Failed
                </option>

              </Input>

            </FormGroup>

          </Col>

          <Col lg="2" className="d-flex align-items-end" >
            <FormGroup>

                <CustomButton
                    text="Search Services"
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

export default AIServicesFilters;