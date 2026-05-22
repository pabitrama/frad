import MDBDataTableComponent
from "../common/MDBDataTable/MDBDataTableComponent";

const TopDistrictsTable = () => {

  const columns = [

    {
      label: "District",
      field: "district"
    },

    {
      label: "Allocation",
      field: "allocation"
    },

    {
      label: "Utilization",
      field: "utilization"
    },

    {
      label: "Technicians",
      field: "technicians"
    },

    {
      label: "Performance",
      field: "performance"
    }

  ];

  const rows = [

    {
      district: "Khordha",
      allocation: 5820,
      utilization: 5420,
      technicians: 48,
      performance: "Excellent"
    },

    {
      district: "Cuttack",
      allocation: 4980,
      utilization: 4620,
      technicians: 42,
      performance: "Good"
    },

    {
      district: "Puri",
      allocation: 4320,
      utilization: 3910,
      technicians: 36,
      performance: "Good"
    }

  ];

  return (

    <MDBDataTableComponent

      columns={columns}

      rows={rows}

      searchable={true}

      pagination={true}

      exportable={true}

      columnVisibility={true}

      tableHeight="500px"

    />

  );

};

export default TopDistrictsTable;