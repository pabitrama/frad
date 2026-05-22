const StockDistributionStatusBadge = ({
  status
}) => {

  return (

    <span
      className={`
        status-badge

        ${
          status === "Delivered"
            ? "success"

            : status === "In Transit"
              ? "warning"
              : "danger"
        }
      `}
    >

      {status}

    </span>

  );

};

export default StockDistributionStatusBadge;