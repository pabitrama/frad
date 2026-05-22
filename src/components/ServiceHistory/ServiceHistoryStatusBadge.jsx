const ServiceHistoryStatusBadge = ({
  status
}) => {

  return (

    <span
      className={`
        status-badge

        ${
          status === "Successful"
            ? "success"

            : status === "Follow-up"
              ? "warning"

              : "danger"
        }
      `}
    >

      {status}

    </span>

  );

};

export default ServiceHistoryStatusBadge;