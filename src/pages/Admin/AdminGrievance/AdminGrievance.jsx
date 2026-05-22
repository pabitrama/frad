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

import ADGrievanceSummaryCards from "../../../components/AdminGrievance/ADGrievanceSummaryCards";

import ADGrievanceFilters from "../../../components/AdminGrievance/ADGrievanceFilters";

import ADGrievanceTrendChart from "../../../components/AdminGrievance/ADGrievanceTrendChart";

import ADCategoryWiseGrievanceChart from "../../../components/AdminGrievance/ADCategoryWiseGrievanceChart";

import ADGrievanceStatusBadge from "../../../components/AdminGrievance/ADGrievanceStatusBadge";

import ADGrievancePriorityBadge from "../../../components/AdminGrievance/ADGrievancePriorityBadge";

import ADGrievanceActionButtons from "../../../components/AdminGrievance/ADGrievanceActionButtons";

import ADAddGrievanceModal from "../../../components/AdminGrievance/ADAddGrievanceModal";

import ADViewGrievanceModal from "../../../components/AdminGrievance/ADViewGrievanceModal";

import ADResolveGrievanceModal from "../../../components/AdminGrievance/ADResolveGrievanceModal";

const AdminGrievance = () => {

  const [search, setSearch] =
    useState("");

  const [modal, setModal] =
    useState(false);

  const [viewModal, setViewModal] =
    useState(false);

  const [resolveModal, setResolveModal] =
    useState(false);

  const [selectedRow, setSelectedRow] =
    useState(null);

  const [tableRows, setTableRows] =
    useState([

      {
        id: 1,
        complaintId: "CMP-1001",
        complainantName: "Rakesh Das",
        category: "AI Service",
        priority: "High",
        grievance: "AI service delayed",
        createdDate: "2026-05-20",
        status: "Pending"
      },

      {
        id: 2,
        complaintId: "CMP-1002",
        complainantName: "Sanjukta Sahoo",
        category: "Delivery",
        priority: "Medium",
        grievance: "Stock not delivered",
        createdDate: "2026-05-18",
        status: "In Progress"
      }

    ]);

  const handleSubmit = (values) => {

    setTableRows((prev) => [

      ...prev,

      {
        ...values,
        id: Date.now(),
        complaintId:
          `CMP-${Date.now()}`,
        createdDate:
          new Date()
            .toISOString()
            .split("T")[0],
        status: "Pending"
      }

    ]);

  };

  const handleResolve = () => {

    setTableRows((prev) =>

      prev.map((item) =>

        item.id === selectedRow.id

          ? {
              ...item,
              status: "Resolved"
            }

          : item
      )
    );

  };

  const handleDelete = (id) => {

    if (
      window.confirm(
        "Delete Grievance?"
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
      label: "Complaint ID",
      field: "complaintId"
    },

    {
      label: "Complainant",
      field: "complainantName"
    },

    {
      label: "Category",
      field: "category"
    },

    {
      label: "Priority",
      field: "priority"
    },

    {
      label: "Status",
      field: "status"
    },

    {
      label: "Created Date",
      field: "createdDate"
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

        item.complainantName
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

      );

    })

    .map((row) => ({

      complaintId:
        row.complaintId,

      complainantName:
        row.complainantName,

      category:
        row.category,

      priority: (

        <ADGrievancePriorityBadge
          priority={row.priority}
        />

      ),

      status: (

        <ADGrievanceStatusBadge
          status={row.status}
        />

      ),

      createdDate:
        row.createdDate,

      action: (

        <ADGrievanceActionButtons

          row={row}

          onView={(row) => {

            setSelectedRow(row);

            setViewModal(true);

          }}

          onResolve={(row) => {

            setSelectedRow(row);

            setResolveModal(true);

          }}

          onDelete={handleDelete}

        />

      )

    }));

  return (
    <React.Fragment>
        <div className="ad-grievances-page">

        {/* HEADER */}

        <div className="page-header d-flex justify-content-between align-items-center mb-4">

            <div>

            <h3 className="fw-bold mb-1">

                Grievance Management

            </h3>

            <p className="text-muted mb-0">

                Manage and resolve farmer and technician grievances

            </p>

            </div>

            <button
            className="btn btn-primary"
            onClick={() =>
                setModal(true)
            }
            >

            <i className="bi bi-plus-circle me-2"></i>

            Add Grievance

            </button>

        </div>

        {/* SUMMARY */}

        <ADGrievanceSummaryCards />

        {/* FILTERS */}

        <ADGrievanceFilters

            search={search}

            setSearch={setSearch}

        />

        {/* CHARTS */}

        <Row className="mb-4">

            <Col lg="8" className="mb-4">

            <ADGrievanceTrendChart />

            </Col>

            <Col lg="4" className="mb-4">

            <ADCategoryWiseGrievanceChart />

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

        {/* ADD MODAL */}

        <ADAddGrievanceModal

            isOpen={modal}

            toggle={() =>
            setModal(!modal)
            }

            onSubmit={handleSubmit}

        />

        {/* VIEW MODAL */}

        <ADViewGrievanceModal

            isOpen={viewModal}

            toggle={() =>
            setViewModal(!viewModal)
            }

            data={selectedRow}

        />

        {/* RESOLVE MODAL */}

        <ADResolveGrievanceModal

            isOpen={resolveModal}

            toggle={() =>
            setResolveModal(!resolveModal)
            }

            onSubmit={handleResolve}

        />

        </div>
    </React.Fragment>
  );

};

export default AdminGrievance;