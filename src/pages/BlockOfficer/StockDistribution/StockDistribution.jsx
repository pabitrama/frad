import React, {
  useState
} from "react";

import {
//   Row,
//   Col,
  Card,
  CardBody
} from "reactstrap";

import MDBDataTableComponent from "../../../components/common/MDBDataTable/MDBDataTableComponent";

import StockDistributionStats from "../../../components/BOStockDistribution/StockDistributionStats";

import StockDistributionFilters from "../../../components/BOStockDistribution/StockDistributionFilters";

// import DistributionSummaryChart from "../../../components/BOStockDistribution/DistributionSummaryChart";

// import DistrictWiseDistributionChart from "../../../components/BOStockDistribution/DistrictWiseDistributionChart";

import StockDistributionStatusBadge from "../../../components/BOStockDistribution/StockDistributionStatusBadge";

import StockDistributionActionButtons from "../../../components/BOStockDistribution/StockDistributionActionButtons";

import AddStockDistributionModal from "../../../components/BOStockDistribution/AddStockDistributionModal";

import ViewStockDistributionModal from "../../../components/BOStockDistribution/ViewStockDistributionModal";

const StockDistribution = () => {

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
        distributionId: "DST-001",
        district: "Khordha",
        block: "Jatani",
        breed: "Holstein",
        quantity: "120",
        distributionDate: "2026-05-10",
        status: "Delivered"
      },

      {
        distributionId: "DST-002",
        district: "Cuttack",
        block: "Salipur",
        breed: "Gir",
        quantity: "80",
        distributionDate: "2026-05-11",
        status: "In Transit"
      }

    ]);

  /* CRUD */

  const handleSubmit = (values) => {

    if (editData) {

      setTableRows((prev) =>

        prev.map((item) =>

          item.distributionId ===
          editData.distributionId

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
        "Delete this distribution?"
      )
    ) {

      setTableRows((prev) =>

        prev.filter(
          (item) =>
            item.distributionId !== id
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
      label: "Distribution ID",
      field: "distributionId"
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
      label: "Date",
      field: "distributionDate"
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

        item.distributionId
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

      distributionId:
        row.distributionId,

      district:
        row.district,

      block:
        row.block,

      breed:
        row.breed,

      quantity:
        row.quantity,

      distributionDate:
        row.distributionDate,

      status: (

        <StockDistributionStatusBadge
          status={row.status}
        />

      ),

      action: (

        <StockDistributionActionButtons

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
        <div className="stock-distribution-page">

        {/* PAGE HEADER */}

        <div className="page-header d-flex justify-content-between align-items-center mb-4">

            <div>

            <h3 className="fw-bold mb-1">

                Stock Distribution Management

            </h3>

            <p className="text-muted mb-0">

                Manage stock distribution across districts and blocks

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

            Add Distribution

            </button>

        </div>

        {/* STATS */}

        <StockDistributionStats />

        {/* FILTERS */}

        <StockDistributionFilters
            search={search}
            setSearch={setSearch}
        />

        {/* CHARTS */}

        {/* <Row className="mb-4">

            <Col lg="4" className="mb-4">

            <DistributionSummaryChart />

            </Col>

            <Col lg="8" className="mb-4">

            <DistrictWiseDistributionChart />

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

        <AddStockDistributionModal

            isOpen={modal}

            toggle={() =>
            setModal(!modal)
            }

            onSubmit={handleSubmit}

            editData={editData}

        />

        {/* VIEW */}

        <ViewStockDistributionModal

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

export default StockDistribution;