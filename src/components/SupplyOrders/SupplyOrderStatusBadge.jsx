const SupplyOrderStatusBadge = ({
  status
}) => {

  return (

    <span
      className={`
        status-badge

        ${
          status === "Approved"
            ? "success"

            : status === "Pending"
              ? "warning"

              : status === "Rejected"
                ? "danger"

                : "primary"
        }
      `}
    >

      {status}

    </span>

  );

};

export default SupplyOrderStatusBadge;