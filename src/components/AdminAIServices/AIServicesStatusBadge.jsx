const AIServicesStatusBadge = ({
  status
}) => {

  return (

    <span
      className={`
        status-badge

        ${
          status === "Successful"
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

export default AIServicesStatusBadge;