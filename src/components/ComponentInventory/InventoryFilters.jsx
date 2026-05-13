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

const InventoryFilters = ({

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
                Search
              </Label>

              <Input
                type="text"
                placeholder="Search Inventory / Breed"
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
                Status
              </Label>

              <Input type="select">

                <option>
                  All
                </option>

                <option>
                  Available
                </option>

                <option>
                  Low Stock
                </option>

                <option>
                  Out Of Stock
                </option>

              </Input>

            </FormGroup>

          </Col>

          <Col lg="3">

            <FormGroup>

              <Label>
                Storage Center
              </Label>

              <Input type="select">

                <option>
                  All Centers
                </option>

                <option>
                  Bhubaneswar
                </option>

                <option>
                  Cuttack
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

export default InventoryFilters;