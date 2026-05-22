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

import ADReportSummaryCards from "../../../components/AdminReport/ADReportSummaryCards";

import ADReportFilters from "../../../components/AdminReport/ADReportFilters";

import ADMonthlyServiceChart from "../../../components/AdminReport/ADMonthlyServiceChart";

import ADDistrictPerformanceChart from "../../../components/AdminReport/ADDistrictPerformanceChart";

import ADReportStatusBadge from "../../../components/AdminReport/ADReportStatusBadge";

import ADReportActionButtons from "../../../components/AdminReport/ADReportActionButtons";

import ADGenerateReportModal from "../../../components/AdminReport/ADGenerateReportModal";

import ADViewReportModal from "../../../components/AdminReport/ADViewReportModal";

const AdminReports = () => {

  const [search, setSearch] =
    useState("");

  const [modal, setModal] =
    useState(false);

  const [viewModal, setViewModal] =
    useState(false);

  const [selectedRow, setSelectedRow] =
    useState(null);

  const [tableRows, setTableRows] =
    useState([

      {
        id: 1,
        reportName: "AI Service Report",
        reportType: "AI Services",
        district: "Khordha",
        createdDate: "2026-05-20",
        status: "Generated"
      },

      {
        id: 2,
        reportName: "Inventory Report",
        reportType: "Inventory",
        district: "Puri",
        createdDate: "2026-05-18",
        status: "Pending"
      }

    ]);

  const handleGenerateReport = (
    values
  ) => {

    setTableRows((prev) => [

      ...prev,

      {
        ...values,
        id: Date.now(),
        createdDate:
          new Date()
            .toISOString()
            .split("T")[0],
        status: "Generated"
      }

    ]);

  };

  const handleDelete = (id) => {

    if (
      window.confirm(
        "Delete Report?"
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

  const handleDownload = (
    row
  ) => {

    alert(
      `${row.reportName} Download Started`
    );

  };

  const columns = [

    {
      label: "Report Name",
      field: "reportName"
    },

    {
      label: "Report Type",
      field: "reportType"
    },

    {
      label: "District",
      field: "district"
    },

    {
      label: "Created Date",
      field: "createdDate"
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

        item.reportName
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

      );

    })

    .map((row) => ({

      reportName:
        row.reportName,

      reportType:
        row.reportType,

      district:
        row.district,

      createdDate:
        row.createdDate,

      status: (

        <ADReportStatusBadge
          status={row.status}
        />

      ),

      action: (

        <ADReportActionButtons

          row={row}

          onView={(row) => {

            setSelectedRow(row);

            setViewModal(true);

          }}

          onDownload={
            handleDownload
          }

          onDelete={handleDelete}

        />

      )

    }));

  return (
    <React.Fragment>
        <div className="ad-reports-page">

        {/* HEADER */}

        <div className="page-header d-flex justify-content-between align-items-center mb-4">

            <div>

            <h3 className="fw-bold mb-1">

                Reports Management

            </h3>

            <p className="text-muted mb-0">

                Generate and monitor system reports and analytics

            </p>

            </div>

            <button
            className="btn btn-primary"
            onClick={() =>
                setModal(true)
            }
            >

            <i className="bi bi-file-earmark-plus me-2"></i>

            Generate Report

            </button>

        </div>

        {/* SUMMARY */}

        <ADReportSummaryCards />

        {/* FILTERS */}

        <ADReportFilters

            search={search}

            setSearch={setSearch}

        />

        {/* CHARTS */}

        <Row className="mb-4">

            <Col lg="8" className="mb-4">

            <ADMonthlyServiceChart />

            </Col>

            <Col lg="4" className="mb-4">

            <ADDistrictPerformanceChart />

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

        {/* GENERATE MODAL */}

        <ADGenerateReportModal

            isOpen={modal}

            toggle={() =>
            setModal(!modal)
            }

            onSubmit={
            handleGenerateReport
            }

        />

        {/* VIEW MODAL */}

        <ADViewReportModal

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

export default AdminReports;