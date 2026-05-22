
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

const DeliveryTrackingFilters = ({

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
                Search Shipment
              </Label>

              <Input
                type="text"
                placeholder="Search Tracking ID"
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
                Delivery Status
              </Label>

              <Input type="select">

                <option>
                  All
                </option>

                <option>
                  In Transit
                </option>

                <option>
                  Delivered
                </option>

                <option>
                  Delayed
                </option>

              </Input>

            </FormGroup>

          </Col>

          <Col lg="3">

            <FormGroup>

              <Label>
                Destination
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

              </Input>

            </FormGroup>

          </Col>

          <Col lg="2" className="d-flex align-items-end" >
            <FormGroup>

                <CustomButton
                    text="Track"
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

export default DeliveryTrackingFilters;