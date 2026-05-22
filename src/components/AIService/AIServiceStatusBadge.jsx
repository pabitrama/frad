const AIServiceStatusBadge = ({
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

              : "danger"
        }
      `}
    >

      {status}

    </span>

  );

};

export default AIServiceStatusBadge;