const DeliveryStatusBadge = ({
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

              : status === "Delayed"
                ? "danger"

                : "primary"
        }
      `}
    >

      {status}

    </span>

  );

};

export default DeliveryStatusBadge;