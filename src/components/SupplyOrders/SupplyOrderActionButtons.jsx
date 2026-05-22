const SupplyOrderActionButtons = ({

  row,

  onView

}) => {

  return (

    <div className="d-flex gap-2">

      <button
        className="btn btn-sm btn-primary"
        onClick={() => onView(row)}
      >

        <i className="bi bi-eye"></i>

      </button>

      <button className="btn btn-sm btn-success">

        <i className="bi bi-check-circle"></i>

      </button>

      <button className="btn btn-sm btn-danger">

        <i className="bi bi-x-circle"></i>

      </button>

    </div>

  );

};

export default SupplyOrderActionButtons;