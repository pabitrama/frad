const ServiceHistoryActionButtons = ({

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

      <button className="btn btn-sm btn-outline-secondary">

        <i className="bi bi-printer"></i>

      </button>

    </div>

  );

};

export default ServiceHistoryActionButtons;