const InventoryStatusBadge = ({
  status
}) => {

  return (

    <span
      className={`
        status-badge

        ${
          status === "Available"
            ? "success"

            : status === "Low Stock"
              ? "warning"

              : "danger"
        }
      `}
    >

      {status}

    </span>

  );

};

export default InventoryStatusBadge;