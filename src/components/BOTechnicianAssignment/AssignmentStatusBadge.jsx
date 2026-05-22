const AssignmentStatusBadge = ({
  status
}) => {

  return (

    <span
      className={`
        status-badge

        ${
          status === "Assigned"
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

export default AssignmentStatusBadge;