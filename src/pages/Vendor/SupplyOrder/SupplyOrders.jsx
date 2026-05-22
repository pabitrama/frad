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

import SupplyOrderStats from "../../../components/SupplyOrders/SupplyOrderStats";

import SupplyOrderFilters from "../../../components/SupplyOrders/SupplyOrderFilters";

import SupplyOrderSummaryChart from "../../../components/SupplyOrders/SupplyOrderSummaryChart";

import SupplyOrderStatusBadge from "../../../components/SupplyOrders/SupplyOrderStatusBadge";

import SupplyOrderActionButtons from "../../../components/SupplyOrders/SupplyOrderActionButtons";

import ViewSupplyOrderModal from "../../../components/SupplyOrders/ViewSupplyOrderModal";

const SupplyOrders = () => {

  const [search, setSearch] =
    useState("");

  const [viewModal, setViewModal] =
    useState(false);

  const [viewData, setViewData] =
    useState(null);

  const tableRows = [

    {
      orderId: "ORD-1001",
      breed: "Holstein",
      quantity: 120,
      batch: "HB-2201",
      deadline: "2026-05-25",
      status: "Pending"
    },

    {
      orderId: "ORD-1002",
      breed: "Gir",
      quantity: 90,
      batch: "GR-1102",
      deadline: "2026-05-26",
      status: "Approved"
    },

    {
      orderId: "ORD-1003",
      breed: "Jersey",
      quantity: 150,
      batch: "JR-4521",
      deadline: "2026-05-28",
      status: "Rejected"
    }

  ];

  const columns = [

    {
      label: "Sl No",
      field: "sl"
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
      label: "Quantity",
      field: "quantity"
    },

    {
      label: "Batch Requirement",
      field: "batch"
    },

    {
      label: "Dispatch Deadline",
      field: "deadline"
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

        item.orderId
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

      );

    })

    .map((row, index) => ({

      sl: index + 1,

      orderId:
        row.orderId,

      breed:
        row.breed,

      quantity:
        row.quantity,

      batch:
        row.batch,

      deadline:
        row.deadline,

      status: (

        <SupplyOrderStatusBadge
          status={row.status}
        />

      ),

      action: (

        <SupplyOrderActionButtons

          row={row}

          onView={(row) => {

            setViewData(row);

            setViewModal(true);

          }}

        />

      )

    }));

  return (
    <React.Fragment>
        <div className="supply-orders-page">

        {/* HEADER */}

        <div className="page-header mb-4">

            <h3 className="fw-bold mb-1">

            Supply Orders

            </h3>

            <p className="text-muted mb-0">

            View and manage incoming supply orders

            </p>

        </div>

        {/* STATS */}

        <SupplyOrderStats />

        {/* FILTERS */}

        <SupplyOrderFilters

            search={search}

            setSearch={setSearch}

        />

        {/* CHART + TABLE */}

        <Row className="mb-4">

            <Col lg="4" className="mb-4">

            <SupplyOrderSummaryChart />

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

        {/* VIEW MODAL */}

        <ViewSupplyOrderModal

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

export default SupplyOrders;