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

const AllocationFilters = ({

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
                placeholder="Search Allocation ID"
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
                District
              </Label>

              <Input type="select">

                <option>
                  All Districts
                </option>

                <option>
                  Khordha
                </option>

                <option>
                  Cuttack
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
                  All Blocks
                </option>

                <option>
                  Jatani
                </option>

                <option>
                  Pipili
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
                  Allocated
                </option>

                <option>
                  Pending
                </option>

                <option>
                  Cancelled
                </option>

              </Input>

            </FormGroup>

          </Col>

          <Col lg="2" className="d-flex align-items-end" >
            <FormGroup>

                <CustomButton
                    text="Filter"
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

export default AllocationFilters;