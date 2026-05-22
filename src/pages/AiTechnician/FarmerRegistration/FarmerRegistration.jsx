import React, {
  useState
} from "react";

import {
  Card,
  CardBody
} from "reactstrap";

import MDBDataTableComponent from "../../../components/common/MDBDataTable/MDBDataTableComponent";

import FarmerRegistrationFilters from "../../../components/FarmerRegistration/FarmerRegistrationFilters";

import FarmerStatusBadge from "../../../components/FarmerRegistration/FarmerStatusBadge";

import FarmerActionButtons from "../../../components/FarmerRegistration/FarmerActionButtons";

import AddFarmerModal from "../../../components/FarmerRegistration/AddFarmerModal";

import ViewFarmerModal from "../../../components/FarmerRegistration/ViewFarmerModal";

const FarmerRegistration = () => {

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
        id: 1,
        farmerName: "Rakesh Das",
        aadhaar: "458745874587",
        mobile: "9876543210",
        gender: "Male",
        district: "Khordha",
        block: "Jatani",
        village: "Village 1",
        address: "Jatani, Khordha",
        status: "Active"
      },

      {
        id: 2,
        farmerName: "Sanjay Rout",
        aadhaar: "784512365478",
        mobile: "9123456780",
        gender: "Male",
        district: "Cuttack",
        block: "Balianta",
        village: "Village 2",
        address: "Balianta, Cuttack",
        status: "Active"
      }

    ]);

  /* CRUD */

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
        "Delete farmer?"
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

  /* TABLE */

  const columns = [

    {
      label: "Sl No",
      field: "sl"
    },

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

    .map((row, index) => ({

      sl: index + 1,

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
        <div className="farmer-registration-page">

        {/* HEADER */}

        <div className="page-header d-flex justify-content-between align-items-center mb-4">

            <div>

            <h3 className="fw-bold mb-1">

                Farmer Registration

            </h3>

            <p className="text-muted mb-0">

                Register and manage farmers for AI services

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

        {/* FILTERS */}

        <FarmerRegistrationFilters

            search={search}

            setSearch={setSearch}

        />

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

            data={viewData}

        />

        </div>
    </React.Fragment>
  );

};

export default FarmerRegistration;