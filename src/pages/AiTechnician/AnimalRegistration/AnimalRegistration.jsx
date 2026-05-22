import React, {
  useState
} from "react";

import {
  Card,
  CardBody
} from "reactstrap";

import MDBDataTableComponent from "../../../components/common/MDBDataTable/MDBDataTableComponent";

import AnimalRegistrationFilters from "../../../components/AnimolRegistration/AnimalRegistrationFilters";

import AnimalStatusBadge from "../../../components/AnimolRegistration/AnimalStatusBadge";

import AnimalActionButtons from "../../../components/AnimolRegistration/AnimalActionButtons";

import AddAnimalModal from "../../../components/AnimolRegistration/AddAnimalModal";

import ViewAnimalModal from "../../../components/AnimolRegistration/ViewAnimalModal";

const AnimalRegistration = () => {

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
        animalTagId: "TAG-1001",
        animalType: "Cow",
        breed: "Holstein",
        age: 4,
        weight: 420,
        healthStatus: "Healthy",
        pregnancyStatus: "Pregnant"
      },

      {
        id: 2,
        animalTagId: "TAG-1002",
        animalType: "Buffalo",
        breed: "Gir",
        age: 5,
        weight: 510,
        healthStatus: "Under Treatment",
        pregnancyStatus: "Not Pregnant"
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
        "Delete animal?"
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
      label: "Tag ID",
      field: "animalTagId"
    },

    {
      label: "Animal Type",
      field: "animalType"
    },

    {
      label: "Breed",
      field: "breed"
    },

    {
      label: "Age",
      field: "age"
    },

    {
      label: "Weight",
      field: "weight"
    },

    {
      label: "Health Status",
      field: "healthStatus"
    },

    {
      label: "Pregnancy Status",
      field: "pregnancyStatus"
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

        item.animalTagId
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

      );

    })

    .map((row, index) => ({

      sl: index + 1,

      animalTagId:
        row.animalTagId,

      animalType:
        row.animalType,

      breed:
        row.breed,

      age:
        row.age,

      weight:
        row.weight,

      healthStatus: (

        <AnimalStatusBadge
          status={row.healthStatus}
        />

      ),

      pregnancyStatus:
        row.pregnancyStatus,

      action: (

        <AnimalActionButtons

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
        <div className="animal-registration-page">

        {/* HEADER */}

        <div className="page-header d-flex justify-content-between align-items-center mb-4">

            <div>

            <h3 className="fw-bold mb-1">

                Animal Registration

            </h3>

            <p className="text-muted mb-0">

                Register and manage animal information

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

            Add Animal

            </button>

        </div>

        {/* FILTERS */}

        <AnimalRegistrationFilters

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

        <AddAnimalModal

            isOpen={modal}

            toggle={() =>
            setModal(!modal)
            }

            onSubmit={handleSubmit}

            editData={editData}

        />

        {/* VIEW */}

        <ViewAnimalModal

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

export default AnimalRegistration;