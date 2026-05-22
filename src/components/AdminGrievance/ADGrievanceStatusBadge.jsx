const ADGrievanceStatusBadge = ({
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

              : status === "In Progress"
                ? "primary"
                : "danger"
        }
      `}
    >

      {status}

    </span>

  );

};

export default ADGrievanceStatusBadge;