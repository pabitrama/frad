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

import RedistributionSummaryCards from "../../../components/AdminRedistribution/RedistributionSummaryCards";

import RedistributionFilters from "../../../components/AdminRedistribution/RedistributionFilters";

import RedistributionTrendChart from "../../../components/AdminRedistribution/RedistributionTrendChart";

import DistrictTransferChart from "../../../components/AdminRedistribution/DistrictTransferChart";

import CriticalTransferAlerts from "../../../components/AdminRedistribution/CriticalTransferAlerts";

import RedistributionStatusBadge from "../../../components/AdminRedistribution/RedistributionStatusBadge";

import RedistributionPriorityBadge from "../../../components/AdminRedistribution/RedistributionPriorityBadge";

import RedistributionActionButtons from "../../../components/AdminRedistribution/RedistributionActionButtons";

import AddRedistributionModal from "../../../components/AdminRedistribution/AddRedistributionModal";

const AdminRedistribution = () => {

  const [search, setSearch] =
    useState("");

  const [modal, setModal] =
    useState(false);

  const [editData, setEditData] =
    useState(null);

  const [tableRows, setTableRows] =
    useState([

      {
        id: 1,
        fromDistrict: "Khordha",
        toDistrict: "Puri",
        breed: "Holstein",
        quantity: 420,
        priority: "High",
        transferDate: "2026-05-20",
        vehicleNo: "OD02AB4587",
        status: "In Transit"
      },

      {
        id: 2,
        fromDistrict: "Cuttack",
        toDistrict: "Balasore",
        breed: "Gir",
        quantity: 280,
        priority: "Medium",
        transferDate: "2026-05-18",
        vehicleNo: "OD05XY8754",
        status: "Completed"
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
          id: Date.now(),
          status: "Pending"
        }

      ]);

    }

    setEditData(null);

  };

  const handleDelete = (id) => {

    if (
      window.confirm(
        "Delete Redistribution?"
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
      label: "From District",
      field: "fromDistrict"
    },

    {
      label: "To District",
      field: "toDistrict"
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

        item.fromDistrict
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

      );

    })

    .map((row) => ({

      fromDistrict:
        row.fromDistrict,

      toDistrict:
        row.toDistrict,

      breed:
        row.breed,

      quantity:
        row.quantity,

      priority: (

        <RedistributionPriorityBadge
          priority={row.priority}
        />

      ),

      status: (

        <RedistributionStatusBadge
          status={row.status}
        />

      ),

      action: (

        <RedistributionActionButtons

          row={row}

          onView={() => {}}

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
        <div className="admin-redistribution-page">

        {/* HEADER */}

        <div className="page-header d-flex justify-content-between align-items-center mb-4">

            <div>

            <h3 className="fw-bold mb-1">

                Redistribution Management

            </h3>

            <p className="text-muted mb-0">

                Manage inter-district stock redistribution and balancing

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

        {/* ANALYTICS */}

        <Row className="mb-4">

            <Col lg="8" className="mb-4">

            <RedistributionTrendChart />

            </Col>

            <Col lg="4" className="mb-4">

            <DistrictTransferChart />

            </Col>

        </Row>

        {/* ALERTS */}

        <Row className="mb-4">

            <Col lg="12">

            <CriticalTransferAlerts />

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

        {/* MODAL */}

        <AddRedistributionModal

            isOpen={modal}

            toggle={() =>
            setModal(!modal)
            }

            onSubmit={handleSubmit}

            editData={editData}

        />

        </div>
    </React.Fragment>
  );

};

export default AdminRedistribution;