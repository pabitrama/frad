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

const FarmerFilters = ({

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
                Search Farmer
              </Label>

              <Input
                type="text"
                placeholder="Search Name / Mobile"
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
                Block
              </Label>

              <Input type="select">

                <option>
                  All
                </option>

                <option>
                  Jatani
                </option>

                <option>
                  Balianta
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
                  Active
                </option>

                <option>
                  Pending
                </option>

                <option>
                  Inactive
                </option>

              </Input>

            </FormGroup>

          </Col>
          <Col lg="3" className="d-flex align-items-end" >
            <FormGroup>

                <CustomButton
                    text="Search Farmer"
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

export default FarmerFilters;