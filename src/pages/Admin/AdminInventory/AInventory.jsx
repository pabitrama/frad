import {
  useState
} from "react";

import {
  Card,
  CardBody
} from "reactstrap";

import MDBDataTableComponent from "../../../components/common/MDBDataTable/MDBDataTableComponent";

import InventoryStats from "../../../components/ComponentInventory/InventoryStats";

import InventoryFilters from "../../../components/ComponentInventory/InventoryFilters";

import InventoryStatusBadge from "../../../components/ComponentInventory/InventoryStatusBadge";

import InventoryActionButtons from "../../../components/ComponentInventory/InventoryActionButtons";

import AddInventoryModal from "../../../components/ComponentInventory/AddInventoryModal";

import ViewInventoryModal from "../../../components/ComponentInventory/ViewInventoryModal";

const AInventory = () => {

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
        inventoryId:
          "INV-001",

        breed:
          "Holstein",

        quantity:
          "1500",

        center:
          "Bhubaneswar",

        expiryDate:
          "2026-12-31",

        status:
          "Available"
      }

    ]);

  /* CRUD */

  const handleSubmit = (values) => {

    if (editData) {

      setTableRows((prev) =>

        prev.map((item) =>

          item.inventoryId ===
          editData.inventoryId

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
        "Delete this inventory?"
      )
    ) {

      setTableRows((prev) =>

        prev.filter(
          (item) =>
            item.inventoryId !== id
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
      label: "Inventory ID",
      field: "inventoryId"
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
      label: "Storage Center",
      field: "center"
    },

    {
      label: "Expiry Date",
      field: "expiryDate"
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

        item.inventoryId
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

      inventoryId:
        row.inventoryId,

      breed:
        row.breed,

      quantity:
        row.quantity,

      center:
        row.center,

      expiryDate:
        row.expiryDate,

      status: (

        <InventoryStatusBadge
          status={row.status}
        />

      ),

      action: (

        <InventoryActionButtons

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

    <div className="inventory-page">

      {/* HEADER */}
      <div className="page-header d-flex justify-content-between align-items-center mb-4">

        <div>

          <h3 className="fw-bold mb-1">
            Inventory Management
          </h3>

          <p className="text-muted mb-0">

            Manage inventory stocks and storage

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

          Add Inventory

        </button>

      </div>

      {/* STATS */}
      <InventoryStats />

      {/* FILTERS */}
      <InventoryFilters
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

            fixedLeftColumns={1}

            fixedRightColumns={1}

            tableHeight="500px"

          />

        </CardBody>

      </Card>

      {/* ADD / EDIT */}
      <AddInventoryModal

        isOpen={modal}

        toggle={() =>
          setModal(!modal)
        }

        onSubmit={handleSubmit}

        editData={editData}

      />

      {/* VIEW */}
      <ViewInventoryModal

        isOpen={viewModal}

        toggle={() =>
          setViewModal(!viewModal)
        }

        data={viewData}

      />

    </div>

  );

};

export default AInventory;