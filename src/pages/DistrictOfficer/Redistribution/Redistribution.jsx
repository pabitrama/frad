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

import RedistributionSummaryCards from "../../../components/DORedistribution/RedistributionSummaryCards";

import RedistributionFilters from "../../../components/DORedistribution/RedistributionFilters";

import LowStockBlocksCard from "../../../components/DORedistribution/LowStockBlocksCard";

import ExcessStockBlocksCard from "../../../components/DORedistribution/ExcessStockBlocksCard";

import RedistributionStatusBadge from "../../../components/DORedistribution/RedistributionStatusBadge";

import RedistributionActionButtons from "../../../components/DORedistribution/RedistributionActionButtons";

import AddRedistributionModal from "../../../components/DORedistribution/AddRedistributionModal";

import ViewRedistributionModal from "../../../components/DORedistribution/ViewRedistributionModal";

import RedistributionTimeline from "../../../components/DORedistribution/RedistributionTimeline";

const Redistribution = () => {

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
        fromBlock: "Khordha",
        toBlock: "Jatani",
        breed: "Holstein",
        quantity: 120,
        transferDate: "2026-05-20",
        vehicleNo: "OD02AB1234",
        status: "Completed",
        remarks: "Urgent stock balancing"
      },

      {
        id: 2,
        fromBlock: "Balipatna",
        toBlock: "Begunia",
        breed: "Gir",
        quantity: 90,
        transferDate: "2026-05-18",
        vehicleNo: "OD33XY9876",
        status: "In Transit",
        remarks: "Low stock support"
      }

    ]);

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
        "Delete redistribution?"
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
      label: "From Block",
      field: "fromBlock"
    },

    {
      label: "To Block",
      field: "toBlock"
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
      label: "Transfer Date",
      field: "transferDate"
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

        item.fromBlock
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

      );

    })

    .map((row) => ({

      fromBlock:
        row.fromBlock,

      toBlock:
        row.toBlock,

      breed:
        row.breed,

      quantity:
        row.quantity,

      transferDate:
        row.transferDate,

      status: (

        <RedistributionStatusBadge
          status={row.status}
        />

      ),

      action: (

        <RedistributionActionButtons

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
        <div className="redistribution-page">

        {/* HEADER */}

        <div className="page-header d-flex justify-content-between align-items-center mb-4">

            <div>

            <h3 className="fw-bold mb-1">

                Redistribution Management

            </h3>

            <p className="text-muted mb-0">

                Manage inter-block semen stock redistribution and balancing

            </p>

            </div>

            <button
            className="btn btn-primary"
            onClick={() => {

                setEditData(null);

                setModal(true);

            }}
            >

            <i className="bi bi-arrow-left-right me-2"></i>

            Add Redistribution

            </button>

        </div>

        {/* SUMMARY */}

        <RedistributionSummaryCards />

        {/* FILTERS */}

        <RedistributionFilters

            search={search}

            setSearch={setSearch}

        />

        {/* OVERVIEW */}

        <Row className="mb-4">

            <Col lg="6" className="mb-4">

            <LowStockBlocksCard />

            </Col>

            <Col lg="6" className="mb-4">

            <ExcessStockBlocksCard />

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

        {/* TIMELINE */}

        <RedistributionTimeline />

        {/* ADD / EDIT */}

        <AddRedistributionModal

            isOpen={modal}

            toggle={() =>
            setModal(!modal)
            }

            onSubmit={handleSubmit}

            editData={editData}

        />

        {/* VIEW */}

        <ViewRedistributionModal

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

export default Redistribution;