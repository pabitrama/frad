import MDBDataTableComponent from "../common/MDBDataTable/MDBDataTableComponent";

import DeliveryStatusBadge
from "./DeliveryStatusBadge";

const DeliveryMonitoringTable = ({
  rows
}) => {

  const columns = [

    {
      label: "Tracking ID",
      field: "trackingId"
    },

    {
      label: "Destination",
      field: "destination"
    },

    {
      label: "Breed",
      field: "breed"
    },

    {
      label: "Quantity",
      field: "quantity"
    },

    {
      label: "Dispatch Date",
      field: "dispatchDate"
    },

    {
      label: "ETA",
      field: "eta"
    },

    {
      label: "Status",
      field: "status"
    }

  ];

  const formattedRows = rows.map(
    (row) => ({

      trackingId:
        row.trackingId,

      destination:
        row.destination,

      breed:
        row.breed,

      quantity:
        row.quantity,

      dispatchDate:
        row.dispatchDate,

      eta:
        row.eta,

      status: (

        <DeliveryStatusBadge
          status={row.status}
        />

      )

    })
  );

  return (

    <MDBDataTableComponent

      columns={columns}

      rows={formattedRows}

      searchable={true}

      pagination={true}

      exportable={true}

      tableHeight="450px"

    />

  );

};

export default DeliveryMonitoringTable;