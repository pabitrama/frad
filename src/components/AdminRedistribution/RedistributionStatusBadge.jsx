const RedistributionStatusBadge = ({
  status
}) => {

  return (

    <span
      className={`
        status-badge

        ${
          status === "Completed"
            ? "success"

            : status === "Pending"
              ? "warning"

              : status === "In Transit"
                ? "primary"
                : "danger"
        }
      `}
    >

      {status}

    </span>

  );

};

export default RedistributionStatusBadge;