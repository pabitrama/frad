const DispatchStatusBadge = ({
  status
}) => {

  return (

    <span
      className={`
        status-badge

        ${
          status === "Delivered"
            ? "success"

            : status === "In Transit"
              ? "warning"

              : status === "Dispatched"
                ? "primary"

                : "danger"
        }
      `}
    >

      {status}

    </span>

  );

};

export default DispatchStatusBadge;