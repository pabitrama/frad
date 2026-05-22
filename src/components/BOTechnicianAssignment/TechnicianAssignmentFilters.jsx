import {
  Card,
  CardBody,
  Row,
  Col,
  Input,
  Label,
  FormGroup
} from "reactstrap";
import CustomButton from "../common/Button/CustomButton";

const TechnicianAssignmentFilters = ({

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
                placeholder="Search Technician"
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
                Service Area
              </Label>

              <Input type="select">

                <option>
                  All Areas
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
                  Assigned
                </option>

                <option>
                  Pending
                </option>

              </Input>

            </FormGroup>

          </Col>
          <Col lg="3" className="d-flex align-items-end" >
            <FormGroup>

                <CustomButton
                    text="Filter Assignments"
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

export default TechnicianAssignmentFilters;