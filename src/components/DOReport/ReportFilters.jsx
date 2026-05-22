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

const ReportFilters = () => {

  return (

    <Card className="border-0 shadow-sm mb-4">

      <CardBody>

        <Row>

          <Col lg="3">

            <FormGroup>

              <Label>
                Report Type
              </Label>

              <Input type="select">

                <option>
                  All Reports
                </option>

                <option>
                  Allocation
                </option>

                <option>
                  Redistribution
                </option>

                <option>
                  Utilization
                </option>

              </Input>

            </FormGroup>

          </Col>

          <Col lg="3">

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
                  Balianta
                </option>

              </Input>

            </FormGroup>

          </Col>

          <Col lg="2">

            <FormGroup>

              <Label>
                From Date
              </Label>

              <Input type="date" />

            </FormGroup>

          </Col>

          <Col lg="2">

            <FormGroup>

              <Label>
                To Date
              </Label>

              <Input type="date" />

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

export default ReportFilters;