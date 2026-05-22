import {
  Alert
} from "reactstrap";

const LowStockBlocks = () => {

  return (

    <Alert
      color="warning"
      className="border-0 shadow-sm h-100"
    >

      <h5 className="fw-bold mb-3">

        Low Stock Alerts

      </h5>

      <ul className="mb-0 ps-3">

        <li>
          Jatani Block - Holstein stock low
        </li>

        <li>
          Balianta Block - Gir stock low
        </li>

        <li>
          Begunia Block - Jersey stock critical
        </li>

      </ul>

    </Alert>

  );

};

export default LowStockBlocks;