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

            : status === "In Transit"
              ? "warning"

              : status === "Pending"
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