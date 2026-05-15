const AllocationStatusBadge = ({
  status
}) => {

  return (

    <span
      className={`
        status-badge

        ${
          status === "Allocated"
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

export default AllocationStatusBadge;