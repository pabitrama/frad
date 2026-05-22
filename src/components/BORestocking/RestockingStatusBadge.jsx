const RestockingStatusBadge = ({
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
              : "danger"
        }
      `}
    >

      {status}

    </span>

  );

};

export default RestockingStatusBadge;