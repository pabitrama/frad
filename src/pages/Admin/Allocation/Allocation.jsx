import React, {
  useState
} from "react";

import {
  Card,
  CardBody
} from "reactstrap";

import MDBDataTableComponent from "../../../components/common/MDBDataTable/MDBDataTableComponent";

import AllocationStats from "../../../components/Allocation/AllocationStats";

import AllocationFilters from "../../../components/Allocation/AllocationFilters";

import AllocationStatusBadge from "../../../components/Allocation/AllocationStatusBadge";

import AllocationActionButtons from "../../../components/Allocation/AllocationActionButtons";

import AddAllocationModal from "../../../components/Allocation/AddAllocationModal";

import ViewAllocationModal from "../../../components/Allocation/ViewAllocationModal";

const Allocation = () => {

  const [search, setSearch] =
    useState("");

  const [modal, setModal] =
    useState(false);

  const [viewModal, setViewModal] =
    useState(false);

  const [editData, setEditData] =
    useState(null);

  const [viewData, setViewData] =
    useState(null);

  const [tableRows, setTableRows] =
    useState([

      {
        allocationId: "AL-001",
        district: "Khordha",
        block: "Jatani",
        breed: "Holstein",
        quantity: "120",
        allocationDate: "2026-05-01",
        status: "Allocated"
      },

      {
        allocationId: "AL-002",
        district: "Cuttack",
        block: "Salipur",
        breed: "Gir",
        quantity: "90",
        allocationDate: "2026-05-02",
        status: "Pending"
      },

      {
        allocationId: "AL-003",
        district: "Puri",
        block: "Pipili",
        breed: "Jersey",
        quantity: "150",
        allocationDate: "2026-05-03",
        status: "Allocated"
      },

      {
        allocationId: "AL-004",
        district: "Balasore",
        block: "Nilgiri",
        breed: "Holstein",
        quantity: "80",
        allocationDate: "2026-05-04",
        status: "Cancelled"
      },

      {
        allocationId: "AL-005",
        district: "Khordha",
        block: "Balianta",
        breed: "Gir",
        quantity: "110",
        allocationDate: "2026-05-05",
        status: "Allocated"
      },

      {
        allocationId: "AL-006",
        district: "Cuttack",
        block: "Athagarh",
        breed: "Jersey",
        quantity: "70",
        allocationDate: "2026-05-06",
        status: "Pending"
      },

      {
        allocationId: "AL-007",
        district: "Puri",
        block: "Satyabadi",
        breed: "Holstein",
        quantity: "130",
        allocationDate: "2026-05-07",
        status: "Allocated"
      },

      {
        allocationId: "AL-008",
        district: "Balasore",
        block: "Soro",
        breed: "Gir",
        quantity: "95",
        allocationDate: "2026-05-08",
        status: "Allocated"
      },

      {
        allocationId: "AL-009",
        district: "Khordha",
        block: "Begunia",
        breed: "Jersey",
        quantity: "75",
        allocationDate: "2026-05-09",
        status: "Pending"
      },

      {
        allocationId: "AL-010",
        district: "Cuttack",
        block: "Tangi",
        breed: "Holstein",
        quantity: "105",
        allocationDate: "2026-05-10",
        status: "Allocated"
      },

      {
        allocationId: "AL-011",
        district: "Puri",
        block: "Kanas",
        breed: "Gir",
        quantity: "98",
        allocationDate: "2026-05-11",
        status: "Cancelled"
      },

      {
        allocationId: "AL-012",
        district: "Balasore",
        block: "Basta",
        breed: "Jersey",
        quantity: "140",
        allocationDate: "2026-05-12",
        status: "Allocated"
      }

    ]);

  /* CRUD */

  const handleSubmit = (values) => {

    if (editData) {

      setTableRows((prev) =>

        prev.map((item) =>

          item.allocationId ===
          editData.allocationId

            ? values

            : item
        )
      );

    } else {

      setTableRows((prev) => [
        ...prev,
        values
      ]);

    }

    setEditData(null);

  };

  const handleDelete = (id) => {

    if (
      window.confirm(
        "Delete this allocation?"
      )
    ) {

      setTableRows((prev) =>

        prev.filter(
          (item) =>
            item.allocationId !== id
        )
      );

    }

  };

  /* TABLE */

  const columns = [

    {
      label: "Sl No",
      field: "sl"
    },

    {
      label: "Allocation ID",
      field: "allocationId"
    },

    {
      label: "District",
      field: "district"
    },

    {
      label: "Block",
      field: "block"
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
      label: "Allocation Date",
      field: "allocationDate"
    },

    {
      label: "Status",
      field: "status"
    },

    {
      label: "Actions",
      field: "action"
    }

  ];

  const rows = tableRows

    .filter((item) => {

      if (!search) return true;

      return (

        item.allocationId
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

        ||

        item.district
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

      );

    })

    .map((row, index) => ({

      sl: index + 1,

      allocationId:
        row.allocationId,

      district:
        row.district,

      block:
        row.block,

      breed:
        row.breed,

      quantity:
        row.quantity,

      allocationDate:
        row.allocationDate,

      status: (

        <AllocationStatusBadge
          status={row.status}
        />

      ),

      action: (

        <AllocationActionButtons

          row={row}

          onView={(row) => {

            setViewData(row);

            setViewModal(true);

          }}

          onEdit={(row) => {

            setEditData(row);

            setModal(true);

          }}

          onDelete={handleDelete}

        />

      )

    }));

  return (
    <React.Fragment>
        <div className="allocation-page">

        {/* HEADER */}
        <div className="page-header d-flex justify-content-between align-items-center mb-4">

            <div>

            <h3 className="fw-bold mb-1">
                Allocation Management
            </h3>

            <p className="text-muted mb-0">

                District & Block wise allocation management

            </p>

            </div>

            <button
            className="btn btn-primary"
            onClick={() => {

                setEditData(null);

                setModal(true);

            }}
            >

            <i className="bi bi-plus-circle me-2"></i>

            Add Allocation

            </button>

        </div>

        {/* STATS */}
        <AllocationStats />

        {/* FILTERS */}
        <AllocationFilters
            search={search}
            setSearch={setSearch}
        />

        {/* TABLE */}
        <Card className="border-0 shadow-sm">

            <CardBody>

            <MDBDataTableComponent

                columns={columns}

                rows={rows}

                searchable={true}

                pagination={true}

                exportable={true}

                columnVisibility={true}

                // fixedLeftColumns={1}

                // fixedRightColumns={1}

                // tableHeight="500px"

            />

            </CardBody>

        </Card>

        {/* ADD / EDIT */}
        <AddAllocationModal

            isOpen={modal}

            toggle={() =>
            setModal(!modal)
            }

            onSubmit={handleSubmit}

            editData={editData}

        />

        {/* VIEW */}
        <ViewAllocationModal

            isOpen={viewModal}

            toggle={() =>
            setViewModal(!viewModal)
            }

            data={viewData}

        />

        </div>
    </React.Fragment>
  );

};

export default Allocation;