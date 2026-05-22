const GrievancePriorityBadge = ({
  priority
}) => {

  return (

    <span
      className={`
        status-badge

        ${
          priority === "High"
            ? "danger"

            : priority === "Medium"
              ? "warning"
              : "success"
        }
      `}
    >

      {priority}

    </span>

  );

};

export default GrievancePriorityBadge;