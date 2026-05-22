import React from "react";
import {
  Row,
  Col
} from "reactstrap";

import TechnicianQuickStats from "../../../components/AITDashboard/TechnicianQuickStats";

import TodayServiceCard from "../../../components/AITDashboard/TodayServiceCard";

import AssignedStockCard from "../../../components/AITDashboard/AssignedStockCard";

import PendingRequestList from "../../../components/AITDashboard/PendingRequestList";

import UpcomingVisitList from "../../../components/AITDashboard/UpcomingVisitList";

import LowStockAlert from "../../../components/AITDashboard/LowStockAlert";

const AITechnicianDashboard = () => {

  return (

    <React.Fragment>
        

        <div className="ai-technician-dashboard">

        {/* PAGE HEADER */}

        <div className="page-header mb-4">

            <h3 className="fw-bold mb-1">

            AI Technician Dashboard

            </h3>

            <p className="text-muted mb-0">

            Monitor field activities, assigned stock and farmer requests

            </p>

        </div>

        {/* ALERT */}

        <LowStockAlert />

        {/* STATS */}

        <TechnicianQuickStats />

        {/* MAIN SECTION */}

        <Row className="mb-4">

            <Col lg="6" className="mb-4">

            <TodayServiceCard />

            </Col>

            <Col lg="6" className="mb-4">

            <AssignedStockCard />

            </Col>

        </Row>

        {/* SECONDARY SECTION */}

        <Row>

            <Col lg="6" className="mb-4">

            <PendingRequestList />

            </Col>

            <Col lg="6" className="mb-4">

            <UpcomingVisitList />

            </Col>

        </Row>

        </div>
    </React.Fragment>

  );

};

export default AITechnicianDashboard;