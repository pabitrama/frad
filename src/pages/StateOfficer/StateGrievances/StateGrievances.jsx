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

import GrievanceSummaryCards from "../../../components/SOGrievance/GrievanceSummaryCards";

import GrievanceFilters from "../../../components/SOGrievance/GrievanceFilters";

import PendingCriticalGrievances from "../../../components/SOGrievance/PendingCriticalGrievances";

import GrievanceCategoryChart from "../../../components/SOGrievance/GrievanceCategoryChart";

import GrievanceStatusBadge from "../../../components/SOGrievance/GrievanceStatusBadge";

import GrievancePriorityBadge from "../../../components/SOGrievance/GrievancePriorityBadge";

import GrievanceActionButtons from "../../../components/SOGrievance/GrievanceActionButtons";

import ViewGrievanceModal from "../../../components/SOGrievance/ViewGrievanceModal";

import ResolveGrievanceModal from "../../../components/SOGrievance/ResolveGrievanceModal";

import RecentGrievanceActivities from "../../../components/SOGrievance/RecentGrievanceActivities";

const StateGrievances = () => {

  const [search, setSearch] =
    useState("");

  const [viewModal, setViewModal] =
    useState(false);

  const [resolveModal, setResolveModal] =
    useState(false);

  const [selectedRow, setSelectedRow] =
    useState(null);

  const [tableRows, setTableRows] =
    useState([

      {
        id: 1,
        complaintId: "GRV-1021",
        district: "Khordha",
        category: "Stock Delay",
        priority: "High",
        status: "Pending",
        description:
          "Delayed semen stock dispatch"
      },

      {
        id: 2,
        complaintId: "GRV-1022",
        district: "Puri",
        category: "Technician Complaint",
        priority: "Medium",
        status: "Resolved",
        description:
          "AI technician unavailable"
      }

    ]);

  const handleResolve = () => {

    setTableRows((prev) =>

      prev.map((item) =>

        item.id === selectedRow.id

          ? {
              ...item,
              status: "Resolved"
            }

          : item
      )
    );

    setResolveModal(false);

  };

  const columns = [

    {
      label: "Complaint ID",
      field: "complaintId"
    },

    {
      label: "District",
      field: "district"
    },

    {
      label: "Category",
      field: "category"
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

        item.complaintId
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

      );

    })

    .map((row) => ({

      complaintId:
        row.complaintId,

      district:
        row.district,

      category:
        row.category,

      priority: (

        <GrievancePriorityBadge
          priority={row.priority}
        />

      ),

      status: (

        <GrievanceStatusBadge
          status={row.status}
        />

      ),

      action: (

        <GrievanceActionButtons

          row={row}

          onView={(row) => {

            setSelectedRow(row);

            setViewModal(true);

          }}

          onResolve={(row) => {

            setSelectedRow(row);

            setResolveModal(true);

          }}

        />

      )

    }));

  return (
    <React.Fragment>
        <div className="state-grievances-page">

        {/* HEADER */}

        <div className="page-header mb-4">

            <h3 className="fw-bold mb-1">

            Grievance Management

            </h3>

            <p className="text-muted mb-0">

            Monitor and resolve district-level complaints and escalations

            </p>

        </div>

        {/* SUMMARY */}

        <GrievanceSummaryCards />

        {/* FILTERS */}

        <GrievanceFilters

            search={search}

            setSearch={setSearch}

        />

        {/* OVERVIEW */}

        <Row className="mb-4">

            <Col lg="6" className="mb-4">

            <PendingCriticalGrievances />

            </Col>

            <Col lg="6" className="mb-4">

            <GrievanceCategoryChart />

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

        {/* ACTIVITIES */}

        <RecentGrievanceActivities />

        {/* VIEW */}

        <ViewGrievanceModal

            isOpen={viewModal}

            toggle={() =>
            setViewModal(!viewModal)
            }

            data={selectedRow}

        />

        {/* RESOLVE */}

        <ResolveGrievanceModal

            isOpen={resolveModal}

            toggle={() =>
            setResolveModal(!resolveModal)
            }

            onResolve={handleResolve}

        />

        </div>
    </React.Fragment>
  );

};

export default StateGrievances;