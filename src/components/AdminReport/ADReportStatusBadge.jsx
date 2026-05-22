const ADReportStatusBadge = ({
  status
}) => {

  return (

    <span
      className={`
        status-badge

        ${
          status === "Generated"
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

export default ADReportStatusBadge;