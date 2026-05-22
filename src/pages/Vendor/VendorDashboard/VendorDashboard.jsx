import {
  Row,
  Col
} from "reactstrap";

import VendorStatsCards from "../../../components/VendorDashboard/VendorStatsCards";

import DispatchStatusChart from "../../../components/VendorDashboard/DispatchStatusChart";

import VEPendingOrdersTable from "../../../components/VendorDashboard/VEPendingOrdersTable";

import VERecentDispatchTable from "../../../components/VendorDashboard/VERecentDispatchTable";



const VendorDashboard = () => {

  return (

    <div className="vendor-dashboard">

      {/* PAGE HEADER */}

      <div className="page-header mb-4">

        <h3 className="fw-bold mb-1">

          Vendor Dashboard

        </h3>

        <p className="text-muted mb-0">

          Monitor supply orders and dispatch activities

        </p>

      </div>

      {/* STATS */}

      <VendorStatsCards />

      {/* CHART + PENDING */}

      <Row className="mb-4">

        <Col lg="4" className="mb-4">

          <DispatchStatusChart />

        </Col>

        <Col lg="8" className="mb-4">

          <VEPendingOrdersTable />

        </Col>

      </Row>

      {/* RECENT DISPATCH */}

      <Row>

        <Col lg="12">

          <VERecentDispatchTable />

        </Col>

      </Row>

    </div>

  );

};

export default VendorDashboard;