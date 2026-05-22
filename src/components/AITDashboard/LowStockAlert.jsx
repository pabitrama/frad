import {
  Alert
} from "reactstrap";

const LowStockAlert = () => {

  return (

    <Alert
      color="warning"
      className="border-0 shadow-sm"
    >

      <div className="d-flex align-items-center">

        <i className="bi bi-exclamation-triangle-fill me-3"></i>

        <div>

          <strong>
            Low Stock Alert:
          </strong>

          <div>

            Holstein doses are below minimum threshold.

          </div>

        </div>

      </div>

    </Alert>

  );

};

export default LowStockAlert;