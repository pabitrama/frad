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

import AllocationRequestSummary from "../../../components/DOAllocationRequest/AllocationRequestSummary";

import AllocationRequestFilters from "../../../components/DOAllocationRequest/AllocationRequestFilters";

import PendingRequestCard from "../../../components/DOAllocationRequest/PendingRequestCard";

import BlockDemandOverview from "../../../components/DOAllocationRequest/BlockDemandOverview";

import AllocationRequestStatusBadge from "../../../components/DOAllocationRequest/AllocationRequestStatusBadge";

import AllocationRequestActionButtons from "../../../components/DOAllocationRequest/AllocationRequestActionButtons";

import ViewAllocationRequestModal from "../../../components/DOAllocationRequest/ViewAllocationRequestModal";

import ApproveAllocationModal from "../../../components/DOAllocationRequest/ApproveAllocationModal";

const AllocationRequest = () => {

  const [search, setSearch] =
    useState("");

  const [viewModal, setViewModal] =
    useState(false);

  const [approveModal, setApproveModal] =
    useState(false);

  const [selectedRow, setSelectedRow] =
    useState(null);

  const [tableRows, setTableRows] =
    useState([

      {
        id: 1,
        block: "Jatani",
        breed: "Holstein",
        quantity: 120,
        requestDate: "2026-05-20",
        status: "Pending",
        remarks: "Urgent requirement"
      },

      {
        id: 2,
        block: "Balianta",
        breed: "Gir",
        quantity: 90,
        requestDate: "2026-05-19",
        status: "Approved",
        remarks: "Routine allocation"
      }

    ]);

  const handleApprove = () => {

    setTableRows((prev) =>

      prev.map((item) =>

        item.id === selectedRow.id

          ? {
              ...item,
              status: "Approved"
            }

          : item
      )
    );

  };

  const handleReject = (row) => {

    if (
      window.confirm(
        "Reject allocation request?"
      )
    ) {

      setTableRows((prev) =>

        prev.map((item) =>

          item.id === row.id

            ? {
                ...item,
                status: "Rejected"
              }

            : item
        )
      );

    }

  };

  const columns = [

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
      label: "Request Date",
      field: "requestDate"
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

        item.block
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

      );

    })

    .map((row) => ({

      block:
        row.block,

      breed:
        row.breed,

      quantity:
        row.quantity,

      requestDate:
        row.requestDate,

      status: (

        <AllocationRequestStatusBadge
          status={row.status}
        />

      ),

      action: (

        <AllocationRequestActionButtons

          row={row}

          onView={(row) => {

            setSelectedRow(row);

            setViewModal(true);

          }}

          onApprove={(row) => {

            setSelectedRow(row);

            setApproveModal(true);

          }}

          onReject={handleReject}

        />

      )

    }));

  return (
    <React.Fragment>
        <div className="allocation-request-page">

        {/* HEADER */}

        <div className="page-header mb-4">

            <h3 className="fw-bold mb-1">

            Allocation Requests

            </h3>

            <p className="text-muted mb-0">

            Review and approve block-level semen allocation requests

            </p>

        </div>

        {/* SUMMARY */}

        <AllocationRequestSummary />

        {/* FILTERS */}

        <AllocationRequestFilters

            search={search}

            setSearch={setSearch}

        />

        {/* OVERVIEW */}

        <Row className="mb-4">

            <Col lg="6" className="mb-4">

            <PendingRequestCard />

            </Col>

            <Col lg="6" className="mb-4">

            <BlockDemandOverview />

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

        {/* VIEW */}

        <ViewAllocationRequestModal

            isOpen={viewModal}

            toggle={() =>
            setViewModal(!viewModal)
            }

            data={selectedRow}

        />

        {/* APPROVE */}

        <ApproveAllocationModal

            isOpen={approveModal}

            toggle={() =>
            setApproveModal(!approveModal)
            }

            data={selectedRow}

            onSubmit={handleApprove}

        />

        </div>
    </React.Fragment>
  );

};

export default AllocationRequest;