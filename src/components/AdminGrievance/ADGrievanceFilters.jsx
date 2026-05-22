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

const ADGrievanceFilters = ({

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
                Search Grievance
              </Label>

              <Input
                type="text"
                placeholder="Search Complaint ID / Name"
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
                Category
              </Label>

              <Input type="select">

                <option>
                  All
                </option>

                <option>
                  AI Service
                </option>

                <option>
                  Stock
                </option>

                <option>
                  Delivery
                </option>

              </Input>

            </FormGroup>

          </Col>

          <Col lg="2">

            <FormGroup>

              <Label>
                Priority
              </Label>

              <Input type="select">

                <option>
                  All
                </option>

                <option>
                  High
                </option>

                <option>
                  Medium
                </option>

                <option>
                  Low
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
                  In Progress
                </option>

                <option>
                  Resolved
                </option>

              </Input>

            </FormGroup>

          </Col>
          <Col lg="3" className="d-flex align-items-end" >
            <FormGroup>

                <CustomButton
                    text="Search Grievances"
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

export default ADGrievanceFilters;