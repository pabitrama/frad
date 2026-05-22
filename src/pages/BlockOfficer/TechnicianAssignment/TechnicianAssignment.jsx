import React, {
  useState
} from "react";

import {
  Card,
  CardBody
} from "reactstrap";

import MDBDataTableComponent from "../../../components/common/MDBDataTable/MDBDataTableComponent";

import TechnicianAssignmentStats from "../../../components/BOTechnicianAssignment/TechnicianAssignmentStats";

import TechnicianAssignmentFilters from "../../../components/BOTechnicianAssignment/TechnicianAssignmentFilters";

import AssignmentStatusBadge from "../../../components/BOTechnicianAssignment/AssignmentStatusBadge";

import AssignmentActionButtons from "../../../components/BOTechnicianAssignment/AssignmentActionButtons";

import AddTechnicianAssignmentModal from "../../../components/BOTechnicianAssignment/AddTechnicianAssignmentModal";

import ViewTechnicianAssignmentModal from "../../../components/BOTechnicianAssignment/ViewTechnicianAssignmentModal";

const TechnicianAssignment = () => {

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
        assignmentId: "ASN-001",
        technician: "Rakesh Das",
        serviceArea: "Jatani",
        dailyCapacity: 18,
        pendingRequests: 12,
        breedDemand: "Holstein",
        batchNumber: "HB-2201",
        assignedQuantity: 120,
        serviceSchedule: "2026-05-18",
        status: "Assigned"
      },

      {
        assignmentId: "ASN-002",
        technician: "Sanjay Rout",
        serviceArea: "Balianta",
        dailyCapacity: 15,
        pendingRequests: 8,
        breedDemand: "Gir",
        batchNumber: "GR-1180",
        assignedQuantity: 90,
        serviceSchedule: "2026-05-19",
        status: "Pending"
      }

    ]);

  /* CRUD */

  const handleSubmit = (values) => {

    if (editData) {

      setTableRows((prev) =>

        prev.map((item) =>

          item.assignmentId ===
          editData.assignmentId

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
        "Delete assignment?"
      )
    ) {

      setTableRows((prev) =>

        prev.filter(
          (item) =>
            item.assignmentId !== id
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
      label: "Technician",
      field: "technician"
    },

    {
      label: "Service Area",
      field: "serviceArea"
    },

    {
      label: "Daily Capacity",
      field: "dailyCapacity"
    },

    {
      label: "Pending Requests",
      field: "pendingRequests"
    },

    {
      label: "Breed Demand",
      field: "breedDemand"
    },

    {
      label: "Batch Number",
      field: "batchNumber"
    },

    {
      label: "Assigned Quantity",
      field: "assignedQuantity"
    },

    {
      label: "Service Schedule",
      field: "serviceSchedule"
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

        item.technician
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

      );

    })

    .map((row, index) => ({

      sl: index + 1,

      technician:
        row.technician,

      serviceArea:
        row.serviceArea,

      dailyCapacity:
        row.dailyCapacity,

      pendingRequests:
        row.pendingRequests,

      breedDemand:
        row.breedDemand,

      batchNumber:
        row.batchNumber,

      assignedQuantity:
        row.assignedQuantity,

      serviceSchedule:
        row.serviceSchedule,

      status: (

        <AssignmentStatusBadge
          status={row.status}
        />

      ),

      action: (

        <>
            <button
            className="btn btn-primary"
            onClick={() => {

                setEditData(null);

                setModal(true);

            }}
            >

            <i className="bi bi-plus-circle me-2"></i>
            </button>

        <AssignmentActionButtons

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
        </>

      )

    }));

  return (
    <React.Fragment>
        <div className="assign-technician-page">

        {/* HEADER */}

        <div className="page-header d-flex justify-content-between align-items-center mb-4">

            <div>

            <h3 className="fw-bold mb-1">

                Assign AI Technicians

            </h3>

            <p className="text-muted mb-0">

                Assign semen doses and schedules to technicians

            </p>

            </div>

            {/* <button
            className="btn btn-primary"
            onClick={() => {

                setEditData(null);

                setModal(true);

            }}
            >

            <i className="bi bi-plus-circle me-2"></i>

            Assign Technician

            </button> */}

        </div>

        {/* STATS */}

        <TechnicianAssignmentStats />

        {/* FILTERS */}

        <TechnicianAssignmentFilters

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

                fixedLeftColumns={1}

                fixedRightColumns={1}

                tableHeight="500px"

            />

            </CardBody>

        </Card>

        {/* MODALS */}

        <AddTechnicianAssignmentModal

            isOpen={modal}

            toggle={() =>
            setModal(!modal)
            }

            onSubmit={handleSubmit}

            editData={editData}

        />

        <ViewTechnicianAssignmentModal

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

export default TechnicianAssignment;