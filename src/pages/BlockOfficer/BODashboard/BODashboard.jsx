import {
  Row,
  Col
} from "reactstrap";


import DashboardStats from "../../../components/BODashboard/DashboardStats";
import StockAvailabilityTable from "../../../components/BODashboard/StockAvailabilityTable";
import MonthlyBreedUsageChart from "../../../components/BODashboard/MonthlyBreedUsageChart";
import CurrentMonthBreedUsage from "../../../components/BODashboard/CurrentMonthBreedUsage";
import RecentActivities from "../../../components/BODashboard/RecentActivities";



const BODashboard = () => {

  return (

    <div className="block-dashboard">

      {/* PAGE HEADER */}

      <div className="page-header mb-4">

        <h3 className="fw-bold mb-1">

          Block Officer Dashboard

        </h3>

        <p className="text-muted mb-0">

          Overview of stock, allocation and breed usage

        </p>

      </div>

      {/* STATS */}

      <DashboardStats />

      {/* STOCK + CURRENT MONTH */}

      <Row className="mb-4">

        <Col lg="8" className="mb-4">

          <StockAvailabilityTable />

        </Col>

        <Col lg="4" className="mb-4">

          <CurrentMonthBreedUsage />

        </Col>

      </Row>

      {/* BAR CHART + ACTIVITIES */}

      <Row>

        <Col lg="8" className="mb-4">

          <MonthlyBreedUsageChart />

        </Col>

        <Col lg="4" className="mb-4">

          <RecentActivities />

        </Col>

      </Row>

    </div>

  );

};

export default BODashboard;