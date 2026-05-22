import React, {
  useState
} from "react";

import {
  // Row,
  // Col,
  Card,
  CardBody
} from "reactstrap";

import MDBDataTableComponent from "../../../components/common/MDBDataTable/MDBDataTableComponent";

import RestockingStats from "../../../components/BORestocking/RestockingStats";

import RestockingFilters from "../../../components/BORestocking/RestockingFilters";

// import RestockingTrendChart from "../../../components/BORestocking/RestockingTrendChart";

// import LowStockAlertCard from "../../../components/BORestocking/LowStockAlertCard";

import RestockingStatusBadge from "../../../components/BORestocking/RestockingStatusBadge";

import RestockingActionButtons from "../../../components/BORestocking/RestockingActionButtons";

import AddRestockingModal from "../../../components/BORestocking/AddRestockingModal";

import ViewRestockingModal from "../../../components/BORestocking/ViewRestockingModal";

const BORestocking = () => {

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
        requestId: "RST-001",
        breed: "Holstein",
        quantity: "120",
        requestDate: "2026-05-10",
        remarks: "Low stock",
        status: "Pending"
      },

      {
        requestId: "RST-002",
        breed: "Gir",
        quantity: "80",
        requestDate: "2026-05-11",
        remarks: "Urgent requirement",
        status: "Approved"
      }

    ]);

  /* CRUD */

  const handleSubmit = (values) => {

    if (editData) {

      setTableRows((prev) =>

        prev.map((item) =>

          item.requestId ===
          editData.requestId

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
        "Delete this request?"
      )
    ) {

      setTableRows((prev) =>

        prev.filter(
          (item) =>
            item.requestId !== id
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
      label: "Request ID",
      field: "requestId"
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
      label: "Request Date",
      field: "requestDate"
    },

    {
      label: "Remarks",
      field: "remarks"
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

        item.requestId
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

        ||

        item.breed
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

      );

    })

    .map((row, index) => ({

      sl: index + 1,

      requestId:
        row.requestId,

      breed:
        row.breed,

      quantity:
        row.quantity,

      requestDate:
        row.requestDate,

      remarks:
        row.remarks,

      status: (

        <RestockingStatusBadge
          status={row.status}
        />

      ),

      action: (

        <RestockingActionButtons

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
        <div className="restocking-page">

        {/* HEADER */}

        <div className="page-header d-flex justify-content-between align-items-center mb-4">

            <div>

            <h3 className="fw-bold mb-1">

                Restocking Management

            </h3>

            <p className="text-muted mb-0">

                Manage stock replenishment requests

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

            Add Request

            </button>

        </div>

        {/* STATS */}

        <RestockingStats />

        {/* FILTERS */}

        <RestockingFilters
            search={search}
            setSearch={setSearch}
        />

        {/* CHART + ALERT */}

        {/* <Row className="mb-4">

            <Col lg="8" className="mb-4">

            <RestockingTrendChart />

            </Col>

            <Col lg="4" className="mb-4">

            <LowStockAlertCard />

            </Col>

        </Row> */}

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

        {/* ADD / EDIT */}

        <AddRestockingModal

            isOpen={modal}

            toggle={() =>
            setModal(!modal)
            }

            onSubmit={handleSubmit}

            editData={editData}

        />

        {/* VIEW */}

        <ViewRestockingModal

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

export default BORestocking;