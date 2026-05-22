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

import ARestockingSummaryCards from "../../../components/AdminRestocking/ARestockingSummaryCards";

import ARestockingFilters from "../../../components/AdminRestocking/ARestockingFilters";

import ARestockingTrendChart from "../../../components/AdminRestocking/ARestockingTrendChart";

import ALowStockDistrictsChart from "../../../components/AdminRestocking/ALowStockDistrictsChart";

import ACriticalStockAlertCard from "../../../components/AdminRestocking/ACriticalStockAlertCard";

import ARestockingStatusBadge from "../../../components/AdminRestocking/ARestockingStatusBadge";

import ARestockingPriorityBadge from "../../../components/AdminRestocking/ARestockingPriorityBadge";

import ARestockingActionButtons from "../../../components/AdminRestocking/ARestockingActionButtons";

import AAddRestockingModal from "../../../components/AdminRestocking/AAddRestockingModal";

import AViewRestockingModal from "../../../components/AdminRestocking/AViewRestockingModal";

import ARecentRestockingActivities from "../../../components/AdminRestocking/ARecentRestockingActivities";

const AdminRestocking = () => {

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
        district: "Khordha",
        breed: "Holstein",
        quantity: 420,
        priority: "High",
        requestDate: "2026-05-18",
        expectedDate: "2026-05-24",
        status: "Pending"
      },

      {
        id: 2,
        district: "Puri",
        breed: "Gir",
        quantity: 280,
        priority: "Medium",
        requestDate: "2026-05-15",
        expectedDate: "2026-05-22",
        status: "In Transit"
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
        "Delete Restocking?"
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
      label: "District",
      field: "district"
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
      label: "Priority",
      field: "priority"
    },

    {
      label: "Expected Delivery",
      field: "expectedDate"
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

        item.district
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

      );

    })

    .map((row) => ({

      district:
        row.district,

      breed:
        row.breed,

      quantity:
        row.quantity,

      priority: (

        <ARestockingPriorityBadge
          priority={row.priority}
        />

      ),

      expectedDate:
        row.expectedDate,

      status: (

        <ARestockingStatusBadge
          status={row.status}
        />

      ),

      action: (

        <ARestockingActionButtons

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
        <div className="restocking-page">

        {/* HEADER */}

        <div className="page-header d-flex justify-content-between align-items-center mb-4">

            <div>

            <h3 className="fw-bold mb-1">

                Restocking Management

            </h3>

            <p className="text-muted mb-0">

                Manage district restocking requests and stock replenishment

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

            Add Restocking

            </button>

        </div>

        {/* SUMMARY */}

        <ARestockingSummaryCards />

        {/* FILTERS */}

        <ARestockingFilters

            search={search}

            setSearch={setSearch}

        />

        {/* ANALYTICS */}

        <Row className="mb-4">

            <Col lg="8" className="mb-4">

            <ARestockingTrendChart />

            </Col>

            <Col lg="4" className="mb-4">

            <ALowStockDistrictsChart />

            </Col>

        </Row>

        {/* ALERTS */}

        <Row className="mb-4">

            <Col lg="12">

            <ACriticalStockAlertCard />

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

        {/* ACTIVITIES */}

        <ARecentRestockingActivities />

        {/* ADD / EDIT */}

        <AAddRestockingModal

            isOpen={modal}

            toggle={() =>
            setModal(!modal)
            }

            onSubmit={handleSubmit}

            editData={editData}

        />

        {/* VIEW */}

        <AViewRestockingModal

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

export default AdminRestocking;