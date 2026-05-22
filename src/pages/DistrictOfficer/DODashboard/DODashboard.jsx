import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

import DistrictOverviewCards from "../../../components/DODashboard/DistrictOverviewCards";

import MonthlyUtilizationChart from "../../../components/DODashboard/MonthlyUtilizationChart";

import BreedDistributionChart from "../../../components/DODashboard/BreedDistributionChart";

import PendingAllocationRequests from "../../../components/DODashboard/PendingAllocationRequests";

import LowStockBlocks from "../../../components/DODashboard/LowStockBlocks";

import BlockPerformanceTable from "../../../components/DODashboard/BlockPerformanceTable";

import RecentActivities from "../../../components/DODashboard/RecentActivities";

const DODashboard = () => {

  return (

    <div className="district-dashboard-page">

      {/* HEADER */}

      <div className="page-header mb-4">

        <h3 className="fw-bold mb-1">

          District Officer Dashboard

        </h3>

        <p className="text-muted mb-0">

          Monitor district stock allocation and block-level performance

        </p>

      </div>

      {/* OVERVIEW */}

      <DistrictOverviewCards />

      {/* CHARTS */}

      <Row className="mb-4">

        <Col lg="8" className="mb-4">

          <MonthlyUtilizationChart />

        </Col>

        <Col lg="4" className="mb-4">

          <BreedDistributionChart />

        </Col>

      </Row>

      {/* REQUESTS */}

      <Row className="mb-4">

        <Col lg="8" className="mb-4">

          <PendingAllocationRequests />

        </Col>

        <Col lg="4" className="mb-4">

          <LowStockBlocks />

        </Col>

      </Row>

      {/* TABLE */}

      <Card className="border-0 shadow-sm mb-4">

        <CardBody>

          <div className="d-flex justify-content-between align-items-center mb-4">

            <h5 className="fw-bold mb-0">

              Block Performance

            </h5>

          </div>

          <BlockPerformanceTable />

        </CardBody>

      </Card>

      {/* ACTIVITIES */}

      <RecentActivities />

    </div>

  );

};

export default DODashboard;