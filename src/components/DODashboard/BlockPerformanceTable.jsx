import MDBDataTableComponent from "../common/MDBDataTable/MDBDataTableComponent";
const BlockPerformanceTable = () => {

  const columns = [

    {
      label: "Block",
      field: "block"
    },

    {
      label: "Available Stock",
      field: "stock"
    },

    {
      label: "Utilized",
      field: "utilized"
    },

    {
      label: "Pending Requests",
      field: "pending"
    },

    {
      label: "Technicians",
      field: "technicians"
    }

  ];

  const rows = [

    {
      block: "Jatani",
      stock: 520,
      utilized: 420,
      pending: 12,
      technicians: 4
    },

    {
      block: "Balianta",
      stock: 430,
      utilized: 350,
      pending: 8,
      technicians: 3
    },

    {
      block: "Begunia",
      stock: 310,
      utilized: 260,
      pending: 5,
      technicians: 2
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

      tableHeight="450px"

    />

  );

};

export default BlockPerformanceTable;