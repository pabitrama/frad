const GrievanceStatusBadge = ({
  status
}) => {

  return (

    <span
      className={`
        status-badge

        ${
          status === "Resolved"
            ? "success"

            : status === "Pending"
              ? "warning"

              : status === "Escalated"
                ? "danger"
                : "primary"
        }
      `}
    >

      {status}

    </span>

  );

};

export default GrievanceStatusBadge;