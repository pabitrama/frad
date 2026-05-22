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

import FarmerSummaryCards from "../../../components/AdminFarmerManagement/FarmerSummaryCards";

import FarmerFilters from "../../../components/AdminFarmerManagement/FarmerFilters";

import FarmerStatisticsChart from "../../../components/AdminFarmerManagement/FarmerStatisticsChart";

import DistrictWiseFarmersChart from "../../../components/AdminFarmerManagement/DistrictWiseFarmersChart";

import FarmerStatusBadge from "../../../components/AdminFarmerManagement/FarmerStatusBadge";

import FarmerActionButtons from "../../../components/AdminFarmerManagement/FarmerActionButtons";

import AddFarmerModal from "../../../components/AdminFarmerManagement/AddFarmerModal";

import ViewFarmerModal from "../../../components/AdminFarmerManagement/ViewFarmerModal";

const FarmerManagement = () => {

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
        aadhaar: "458796321458",
        mobile: "9876543210",
        gender: "Male",
        district: "Khordha",
        block: "Jatani",
        village: "Gobindpur",
        status: "Active"
      },

      {
        id: 2,
        farmerName: "Sanjukta Sahoo",
        aadhaar: "784512369874",
        mobile: "9123456780",
        gender: "Female",
        district: "Puri",
        block: "Balianta",
        village: "Nuagaon",
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
        "Delete Farmer?"
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
      label: "Farmer Name",
      field: "farmerName"
    },

    {
      label: "Mobile",
      field: "mobile"
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
      label: "Village",
      field: "village"
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

      mobile:
        row.mobile,

      district:
        row.district,

      block:
        row.block,

      village:
        row.village,

      status: (

        <FarmerStatusBadge
          status={row.status}
        />

      ),

      action: (

        <FarmerActionButtons

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
        <div className="farmer-management-page">

        {/* HEADER */}

        <div className="page-header d-flex justify-content-between align-items-center mb-4">

            <div>

            <h3 className="fw-bold mb-1">

                Farmer Management

            </h3>

            <p className="text-muted mb-0">

                Manage farmer registration, verification and monitoring

            </p>

            </div>

            <button
            className="btn btn-primary"
            onClick={() => {

                setEditData(null);

                setModal(true);

            }}
            >

            <i className="bi bi-person-plus me-2"></i>

            Add Farmer

            </button>

        </div>

        {/* SUMMARY */}

        <FarmerSummaryCards />

        {/* FILTERS */}

        <FarmerFilters

            search={search}

            setSearch={setSearch}

        />

        {/* CHARTS */}

        <Row className="mb-4">

            <Col lg="8" className="mb-4">

            <FarmerStatisticsChart />

            </Col>

            <Col lg="4" className="mb-4">

            <DistrictWiseFarmersChart />

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

        <AddFarmerModal

            isOpen={modal}

            toggle={() =>
            setModal(!modal)
            }

            onSubmit={handleSubmit}

            editData={editData}

        />

        {/* VIEW */}

        <ViewFarmerModal

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

export default FarmerManagement;