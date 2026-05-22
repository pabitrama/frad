import React, {
  useState
} from "react";

import {
  Card,
  CardBody
} from "reactstrap";

import MDBDataTableComponent from "../../../components/common/MDBDataTable/MDBDataTableComponent";

import AIServiceFilters from "../../../components/AIService/AIServiceFilters";

import AIServiceStatusBadge from "../../../components/AIService/AIServiceStatusBadge";

import AIServiceActionButtons from "../../../components/AIService/AIServiceActionButtons";

import AddAIServiceModal from "../../../components/AIService/AddAIServiceModal";

import ViewAIServiceModal from "../../../components/AIService/ViewAIServiceModal";

import ServiceSummaryCard from "../../../components/AIService/ServiceSummaryCard";

const AIService = () => {

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
        id: 1,
        farmerName: "Rakesh Das",
        animalTagId: "TAG-1001",
        breed: "Holstein",
        batchNumber: "HB-2201",
        serviceDate: "2026-05-20",
        technicianName: "Ajit Kumar",
        pregnancyHistory: "Previous successful AI",
        remarks: "Healthy animal",
        status: "Completed"
      }

    ]);

  /* CRUD */

  const handleSubmit = (values) => {

    if (editData) {

      setTableRows((prev) =>

        prev.map((item) =>

          item.id === editData.id

            ? values

            : item
        )
      );

    } else {

      setTableRows((prev) => [

        ...prev,

        {
          ...values,
          id: Date.now()
        }

      ]);

    }

    setEditData(null);

  };

  const handleDelete = (id) => {

    if (
      window.confirm(
        "Delete service entry?"
      )
    ) {

      setTableRows((prev) =>

        prev.filter(
          (item) =>
            item.id !== id
        )
      );

    }

  };

  const columns = [

    {
      label: "Farmer",
      field: "farmerName"
    },

    {
      label: "Animal Tag",
      field: "animalTagId"
    },

    {
      label: "Breed",
      field: "breed"
    },

    {
      label: "Batch",
      field: "batchNumber"
    },

    {
      label: "Service Date",
      field: "serviceDate"
    },

    {
      label: "Technician",
      field: "technicianName"
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

        item.farmerName
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

      );

    })

    .map((row) => ({

      farmerName:
        row.farmerName,

      animalTagId:
        row.animalTagId,

      breed:
        row.breed,

      batchNumber:
        row.batchNumber,

      serviceDate:
        row.serviceDate,

      technicianName:
        row.technicianName,

      status: (

        <AIServiceStatusBadge
          status={row.status}
        />

      ),

      action: (

        <AIServiceActionButtons

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
        <div className="ai-service-page">

        {/* HEADER */}

        <div className="page-header d-flex justify-content-between align-items-center mb-4">

            <div>

            <h3 className="fw-bold mb-1">

                AI Service Entry

            </h3>

            <p className="text-muted mb-0">

                Record and manage field-level AI services

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

            Add AI Service

            </button>

        </div>

        {/* SUMMARY */}

        <ServiceSummaryCard />

        {/* FILTERS */}

        <AIServiceFilters

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

                tableHeight="500px"

            />

            </CardBody>

        </Card>

        {/* ADD / EDIT */}

        <AddAIServiceModal

            isOpen={modal}

            toggle={() =>
            setModal(!modal)
            }

            onSubmit={handleSubmit}

            editData={editData}

        />

        {/* VIEW */}

        <ViewAIServiceModal

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

export default AIService;