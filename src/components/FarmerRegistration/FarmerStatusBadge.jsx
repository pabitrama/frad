const FarmerStatusBadge = ({
  status
}) => {

  return (

    <span
      className={`
        status-badge

        ${
          status === "Active"
            ? "success"
            : "danger"
        }
      `}
    >

      {status}

    </span>

  );

};

export default FarmerStatusBadge;