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

import DispatchStats from "../../../components/DispatchEntry/DispatchStats";

import DispatchFilters from "../../../components/DispatchEntry/DispatchFilters";

import DispatchSummaryChart from "../../../components/DispatchEntry/DispatchSummaryChart";

import DispatchStatusBadge from "../../../components/DispatchEntry/DispatchStatusBadge";

import DispatchActionButtons from "../../../components/DispatchEntry/DispatchActionButtons";

import AddDispatchModal from "../../../components/DispatchEntry/AddDispatchModal";

import ViewDispatchModal from "../../../components/DispatchEntry/ViewDispatchModal";

const DispatchEntry = () => {

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
        dispatchId: "DSP-101",
        orderId: "ORD-1001",
        breed: "Holstein",
        batchNumber: "HB-2201",
        quantity: 120,
        dispatchDate: "2026-05-18",
        vehicleNumber: "OD02AB4587",
        driverName: "Ramesh Das",
        expectedDelivery: "2026-05-20",
        status: "Dispatched"
      },

      {
        dispatchId: "DSP-102",
        orderId: "ORD-1002",
        breed: "Gir",
        batchNumber: "GR-1102",
        quantity: 90,
        dispatchDate: "2026-05-19",
        vehicleNumber: "OD05CD7789",
        driverName: "Sanjay Rout",
        expectedDelivery: "2026-05-21",
        status: "In Transit"
      }

    ]);

  /* CRUD */

  const handleSubmit = (values) => {

    if (editData) {

      setTableRows((prev) =>

        prev.map((item) =>

          item.dispatchId ===
          editData.dispatchId

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
        "Delete this dispatch?"
      )
    ) {

      setTableRows((prev) =>

        prev.filter(
          (item) =>
            item.dispatchId !== id
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
      label: "Dispatch ID",
      field: "dispatchId"
    },

    {
      label: "Order ID",
      field: "orderId"
    },

    {
      label: "Breed",
      field: "breed"
    },

    {
      label: "Batch Number",
      field: "batchNumber"
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
      label: "Vehicle Number",
      field: "vehicleNumber"
    },

    {
      label: "Expected Delivery",
      field: "expectedDelivery"
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

        item.dispatchId
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

      );

    })

    .map((row, index) => ({

      sl: index + 1,

      dispatchId:
        row.dispatchId,

      orderId:
        row.orderId,

      breed:
        row.breed,

      batchNumber:
        row.batchNumber,

      quantity:
        row.quantity,

      dispatchDate:
        row.dispatchDate,

      vehicleNumber:
        row.vehicleNumber,

      expectedDelivery:
        row.expectedDelivery,

      status: (

        <DispatchStatusBadge
          status={row.status}
        />

      ),

      action: (

        <DispatchActionButtons

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

        <div className="dispatch-entry-page">

        {/* PAGE HEADER */}

        <div className="page-header d-flex justify-content-between align-items-center mb-4">

            <div>

            <h3 className="fw-bold mb-1">

                Dispatch Entry

            </h3>

            <p className="text-muted mb-0">

                Manage shipment dispatch and logistics details

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

            Add Dispatch

            </button>

        </div>

        {/* STATS */}

        <DispatchStats />

        {/* FILTERS */}

        <DispatchFilters

            search={search}

            setSearch={setSearch}

        />

        {/* CHART + TABLE */}

        <Row className="mb-4">

            <Col lg="4" className="mb-4">

            <DispatchSummaryChart />

            </Col>

            <Col lg="8" className="mb-4">

            <Card className="border-0 shadow-sm h-100">

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

            </Col>

        </Row>

        {/* ADD / EDIT */}

        <AddDispatchModal

            isOpen={modal}

            toggle={() =>
            setModal(!modal)
            }

            onSubmit={handleSubmit}

            editData={editData}

        />

        {/* VIEW */}

        <ViewDispatchModal

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

export default DispatchEntry;