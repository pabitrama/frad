// import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

import DashboardCharts from "../../../components/Charts/DonotChart";

const dashboardCards = [
  {
    title: "Total Inventory",
    value: "25,480",
    icon: "bi bi-box-seam",
    color: "primary"
  },
  {
    title: "Available Doses",
    value: "18,920",
    icon: "bi bi-droplet",
    color: "success"
  },
  {
    title: "Near Expiry Stock",
    value: "1,245",
    icon: "bi bi-exclamation-triangle",
    color: "warning"
  },
  {
    title: "Pending Allocations",
    value: "56",
    icon: "bi bi-clock-history",
    color: "danger"
  },
  {
    title: "Procurement Orders",
    value: "12",
    icon: "bi bi-cart-check",
    color: "info"
  },
  {
    title: "Open Grievances",
    value: "08",
    icon: "bi bi-chat-left-text",
    color: "dark"
  }
];

const quickActions = [
  {
    title: "Add Procurement",
    icon: "bi bi-plus-circle"
  },
  {
    title: "Allocate Stock",
    icon: "bi bi-diagram-3"
  },
  {
    title: "Generate Reports",
    icon: "bi bi-file-earmark-bar-graph"
  },
  {
    title: "Approve Requests",
    icon: "bi bi-check-circle"
  }
];

const AdminDashboard = () => {

  return (

    <div className="admin-dashboard">

      {/* =========================
          PAGE HEADER
      ========================= */}

      <div className="dashboard-header mb-4">

        <h2 className="fw-bold mb-1">
          Admin Dashboard
        </h2>

        <p className="text-muted mb-0">
          Welcome to Semen Inventory
          Management System
        </p>

      </div>

      {/* =========================
          KPI CARDS
      ========================= */}

      <Row>

        {dashboardCards.map((card, index) => (

          <Col
            lg="4"
            md="6"
            sm="12"
            key={index}
            className="mb-4"
          >

            <Card className="dashboard-card border-0 shadow-sm" >

              <CardBody>

                <div className="d-flex justify-content-between align-items-center">

                  <div>

                    <h6 className="card-title text-light">
                      {card.title}
                    </h6>

                    <h3 className="fw-bold mt-2 text-light">
                      {card.value}
                    </h3>

                  </div>

                  <div className={`bg-${card.color} dashboard-icon text-light`}>

                    <i className={card.icon}></i>

                  </div>

                </div>

              </CardBody>

            </Card>

          </Col>

        ))}

      </Row>

      {/* =========================
          QUICK ACTIONS
      ========================= */}

      <Row className="mt-2">

        <Col lg="12">

          <Card className="border-0 shadow-sm">

            <CardBody>

              <div className="d-flex justify-content-between align-items-center mb-4">

                <h5 className="fw-bold mb-0">
                  Quick Actions
                </h5>

              </div>

              <div className="quick-action-grid">

                {quickActions.map((item, index) => (

                  <button
                    key={index}
                    className="quick-action-btn"
                  >

                    <i className={item.icon}></i>

                    <span>
                      {item.title}
                    </span>

                  </button>

                ))}

              </div>

            </CardBody>

          </Card>

        </Col>

      </Row>

      {/* =========================
          CHART PLACEHOLDER
      ========================= */}

      {/* <Row className="mt-4">

        <Col lg="8" className="mb-4">

          <Card className="border-0 shadow-sm h-100">

            <CardBody>

              <div className="d-flex justify-content-between align-items-center mb-3">

                <h5 className="fw-bold mb-0">
                  Monthly Utilization Trend
                </h5>

              </div>

              <div className="chart-placeholder">

                <DashboardCharts />

              </div>

            </CardBody>

          </Card>

        </Col>

        <Col lg="4" className="mb-4">

          <Card className="border-0 shadow-sm h-100">

            <CardBody>

              <div className="d-flex justify-content-between align-items-center mb-3">

                <h5 className="fw-bold mb-0">
                  Breed Distribution
                </h5>

              </div>

              <div className="chart-placeholder">

                Pie Chart Area

              </div>

            </CardBody>

          </Card>

        </Col>

      </Row> */}

      <DashboardCharts />

      {/* =========================
          RECENT ACTIVITIES
      ========================= */}

      <Row>

        <Col lg="12">

          <Card className="border-0 shadow-sm">

            <CardBody>

              <h5 className="fw-bold mb-4">
                Recent Activities
              </h5>

              <div className="activity-list">

                <div className="activity-item">
                  <div className="activity-dot bg-primary"></div>

                  <div>
                    New procurement order approved
                    <small className="d-block text-muted">
                      10 mins ago
                    </small>
                  </div>
                </div>

                <div className="activity-item">
                  <div className="activity-dot bg-success"></div>

                  <div>
                    District stock allocation completed
                    <small className="d-block text-muted">
                      30 mins ago
                    </small>
                  </div>
                </div>

                <div className="activity-item">
                  <div className="activity-dot bg-danger"></div>

                  <div>
                    Near expiry stock alert generated
                    <small className="d-block text-muted">
                      1 hour ago
                    </small>
                  </div>
                </div>

              </div>

            </CardBody>

          </Card>

        </Col>

      </Row>

    </div>
  );
};

export default AdminDashboard;