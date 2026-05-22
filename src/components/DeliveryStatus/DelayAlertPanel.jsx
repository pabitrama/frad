import {
  Alert
} from "reactstrap";

const DelayAlertPanel = () => {

  return (

    <Alert
      color="warning"
      className="shadow-sm border-0"
    >

      <div className="d-flex align-items-center">

        <i className="bi bi-exclamation-triangle-fill me-3"></i>

        <div>

          <strong>
            Delivery Delay Alert:
          </strong>

          <div>

            Shipment DSP-102 is delayed due to transportation issue.

          </div>

        </div>

      </div>

    </Alert>

  );

};

export default DelayAlertPanel;