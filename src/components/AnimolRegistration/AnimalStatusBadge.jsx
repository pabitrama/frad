const AnimalStatusBadge = ({
  status
}) => {

  return (

    <span
      className={`
        status-badge

        ${
          status === "Healthy"
            ? "success"

            : status === "Pregnant"
              ? "primary"

              : "warning"
        }
      `}
    >

      {status}

    </span>

  );

};

export default AnimalStatusBadge;