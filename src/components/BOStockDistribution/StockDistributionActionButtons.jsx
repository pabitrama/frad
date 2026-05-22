const StockDistributionActionButtons = ({

  row,

  onView,
  onEdit,
  onDelete

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
        className="btn btn-sm btn-warning"
        onClick={() => onEdit(row)}
      >

        <i className="bi bi-pencil"></i>

      </button>

      <button
        className="btn btn-sm btn-danger"
        onClick={() =>
          onDelete(
            row.distributionId
          )
        }
      >

        <i className="bi bi-trash"></i>

      </button>

    </div>

  );

};

export default StockDistributionActionButtons;