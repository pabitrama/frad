import React, {
  useState
} from "react";

import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

import StateReportSummaryCards from "../../../components/SOReport/StateReportSummaryCards";

import StateReportFilters from "../../../components/SOReport/StateReportFilters";

import StateDistributionChart from "../../../components/SOReport/StateDistributionChart";

import DistrictPerformanceChart from "../../../components/SOReport/DistrictPerformanceChart";

import BreedDemandChart from "../../../components/SOReport/BreedDemandChart";

import TopDistrictsTable from "../../../components/SOReport/TopDistrictsTable";

import StateReportInsights from "../../../components/SOReport/StateReportInsights";

import StateRecentActivities from "../../../components/SOReport/StateRecentActivities";

import ExportStateReportModal from "../../../components/SOReport/ExportStateReportModal";

const StateReports = () => {

  const [exportModal, setExportModal] =
    useState(false);

  return (
    <React.Fragment>
        <div className="state-reports-page">

          {/* HEADER */}

          <div className="page-header d-flex justify-content-between align-items-center mb-4">

            <div>

              <h3 className="fw-bold mb-1">

                State Reports & Analytics

              </h3>

              <p className="text-muted mb-0">

                Monitor statewide distribution, utilization and district performance

              </p>

            </div>

            <button
              className="btn btn-primary"
              onClick={() =>
                setExportModal(true)
              }
            >

              <i className="bi bi-download me-2"></i>

              Export Report

            </button>

          </div>

          {/* SUMMARY */}

          <StateReportSummaryCards />

          {/* FILTERS */}

          <StateReportFilters />

          {/* CHARTS */}

          <Row className="mb-4">

            <Col lg="4" className="mb-4">

              <BreedDemandChart />

            </Col>

            <Col lg="4" className="mb-4">

              <DistrictPerformanceChart />

            </Col>

            <Col lg="4" className="mb-4">

              <StateDistributionChart />

            </Col>

          </Row>

          {/* TABLE */}

          <Card className="border-0 shadow-sm mb-4">

            <CardBody>

              <div className="d-flex justify-content-between align-items-center mb-4">

                <h5 className="fw-bold mb-0">

                  Top District Performance

                </h5>

              </div>

              <TopDistrictsTable />

            </CardBody>

          </Card>

          {/* INSIGHTS */}

          <Row>

            <Col lg="6" className="mb-4">

              <StateReportInsights />

            </Col>

            <Col lg="6" className="mb-4">

              <StateRecentActivities />

            </Col>

          </Row>

          {/* EXPORT */}

          <ExportStateReportModal

            isOpen={exportModal}

            toggle={() =>
              setExportModal(!exportModal)
            }

          />

        </div>
    </React.Fragment>
  );

};

export default StateReports;