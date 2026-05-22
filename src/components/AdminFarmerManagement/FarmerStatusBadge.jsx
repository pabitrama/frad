const FarmerStatusBadge = ({
  status
}) => {

  return (

    <span
      className={`
        status-badge

        ${
          status === "Active"
            ? "success"

            : status === "Pending"
              ? "warning"

              : "danger"
        }
      `}
    >

      {status}

    </span>

  );

};

export default FarmerStatusBadge;