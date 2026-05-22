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

const AIServiceFilters = ({

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
                Search Service
              </Label>

              <Input
                type="text"
                placeholder="Search Farmer / Animal"
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

          <Col lg="3">

            <FormGroup>

              <Label>
                Service Status
              </Label>

              <Input type="select">

                <option>
                  All
                </option>

                <option>
                  Completed
                </option>

                <option>
                  Pending
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

export default AIServiceFilters;