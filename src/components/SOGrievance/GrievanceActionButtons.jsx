const GrievanceActionButtons = ({

  row,

  onView,
  onResolve

}) => {

  return (

    <div className="d-flex gap-2">

      <button
        className="btn btn-sm btn-primary"
        onClick={() => onView(row)}
      >

        <i className="bi bi-eye"></i>

      </button>

      <button
        className="btn btn-sm btn-success"
        onClick={() => onResolve(row)}
      >

        <i className="bi bi-check-circle"></i>

      </button>

    </div>

  );

};

export default GrievanceActionButtons;