import React, {
  useState
} from "react";

import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

import MDBDataTableComponent from "../../../components/common/MDBDataTable/MDBDataTableComponent";

import AIServicesSummaryCards from "../../../components/AdminAIServices/AIServicesSummaryCards";

import AIServicesFilters from "../../../components/AdminAIServices/AIServicesFilters";

import ServiceAnalyticsChart from "../../../components/AdminAIServices/ServiceAnalyticsChart";

import TechnicianPerformanceChart from "../../../components/AdminAIServices/TechnicianPerformanceChart";

import AIServicesStatusBadge from "../../../components/AdminAIServices/AIServicesStatusBadge";

import AIServicesActionButtons from "../../../components/AdminAIServices/AIServicesActionButtons";

import AddAIServiceModal from "../../../components/AdminAIServices/AddAIServiceModal";

import ViewAIServiceModal from "../../../components/AdminAIServices/ViewAIServiceModal";

const AdminAIServices = () => {

  const [search, setSearch] =
    useState("");

  const [modal, setModal] =
    useState(false);

  const [viewModal, setViewModal] =
    useState(false);

  const [editData, setEditData] =
    useState(null);

  const [selectedRow, setSelectedRow] =
    useState(null);

  const [tableRows, setTableRows] =
    useState([

      {
        id: 1,
        farmerName: "Rakesh Das",
        animalTag: "TAG-1001",
        breed: "Holstein",
        technician: "Ajay Kumar",
        serviceDate: "2026-05-20",
        status: "Successful"
      },

      {
        id: 2,
        farmerName: "Sanjay Rout",
        animalTag: "TAG-1002",
        breed: "Gir",
        technician: "Bikash Sahu",
        serviceDate: "2026-05-18",
        status: "Pending"
      }

    ]);

  const handleSubmit = (values) => {

    if (editData) {

      setTableRows((prev) =>

        prev.map((item) =>

          item.id === editData.id

            ? {
                ...values,
                id: editData.id
              }

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
        "Delete AI Service?"
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
      field: "animalTag"
    },

    {
      label: "Breed",
      field: "breed"
    },

    {
      label: "Technician",
      field: "technician"
    },

    {
      label: "Service Date",
      field: "serviceDate"
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

      animalTag:
        row.animalTag,

      breed:
        row.breed,

      technician:
        row.technician,

      serviceDate:
        row.serviceDate,

      status: (

        <AIServicesStatusBadge
          status={row.status}
        />

      ),

      action: (

        <AIServicesActionButtons

          row={row}

          onView={(row) => {

            setSelectedRow(row);

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
      <div className="ai-services-page">

        {/* HEADER */}

        <div className="page-header d-flex justify-content-between align-items-center mb-4">

          <div>

            <h3 className="fw-bold mb-1">

              AI Services Management

            </h3>

            <p className="text-muted mb-0">

              Monitor artificial insemination services and technician activities

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

        <AIServicesSummaryCards />

        {/* FILTERS */}

        <AIServicesFilters

          search={search}

          setSearch={setSearch}

        />

        {/* CHARTS */}

        <Row className="mb-4">

          <Col lg="8" className="mb-4">

            <ServiceAnalyticsChart />

          </Col>

          <Col lg="4" className="mb-4">

            <TechnicianPerformanceChart />

          </Col>

        </Row>

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

          data={selectedRow}

        />

      </div>
    </React.Fragment>
  );

};

export default AdminAIServices;