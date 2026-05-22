const ADReportActionButtons = ({

  row,

  onView,
  onDownload,
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
        className="btn btn-sm btn-success"
        onClick={() => onDownload(row)}
      >

        <i className="bi bi-download"></i>

      </button>

      <button
        className="btn btn-sm btn-danger"
        onClick={() =>
          onDelete(row.id)
        }
      >

        <i className="bi bi-trash"></i>

      </button>

    </div>

  );

};

export default ADReportActionButtons;