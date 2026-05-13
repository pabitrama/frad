// import React from "react";

import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

import Chart from "react-apexcharts";

const DashboardCharts = () => {

  /* =========================================
     LINE CHART
  ========================================= */

  const utilizationOptions = {

    chart: {
      type: "area",
      toolbar: {
        show: false
      }
    },

    dataLabels: {
      enabled: false
    },

    stroke: {
      curve: "smooth",
      width: 3
    },

    colors: [
      "#ff7a00",
      "#1e3a8a"
    ],

    fill: {
      type: "gradient",

      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1
      }
    },

    xaxis: {

      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul"
      ]

    },

    grid: {
      borderColor: "#e9ecef"
    },

    legend: {
      position: "top"
    }

  };

  const utilizationSeries = [

    {
      name: "Procurement",

      data: [
        120,
        140,
        135,
        170,
        160,
        190,
        210
      ]
    },

    {
      name: "Distribution",

      data: [
        100,
        120,
        118,
        150,
        145,
        172,
        185
      ]
    }

  ];

  /* =========================================
     DONUT CHART
  ========================================= */

  const breedOptions = {

    chart: {
      type: "donut"
    },

    labels: [
      "Jersey",
      "Holstein",
      "Gir",
      "Sahiwal"
    ],

    colors: [
      "#ff7a00",
      "#1e3a8a",
      "#ffc107",
      "#198754"
    ],

    legend: {
      position: "bottom"
    },

    dataLabels: {
      enabled: true
    },

    plotOptions: {
      pie: {

        donut: {
          size: "68%"
        }

      }
    }

  };

  const breedSeries = [
    35,
    30,
    20,
    15
  ];

  return (

    <Row className="mt-4">

      {/* =========================================
          UTILIZATION CHART
      ========================================= */}

      <Col lg="8" className="mb-4">

        <Card className="border-0 shadow-sm h-100">

          <CardBody>

            <div className="d-flex justify-content-between align-items-center mb-3">

              <h5 className="fw-bold mb-0">
                Monthly Utilization Trend
              </h5>

            </div>

            <Chart
              options={utilizationOptions}
              series={utilizationSeries}
              type="area"
              height={350}
            />

          </CardBody>

        </Card>

      </Col>

      {/* =========================================
          BREED DISTRIBUTION
      ========================================= */}

      <Col lg="4" className="mb-4">

        <Card className="border-0 shadow-sm h-100">

          <CardBody>

            <div className="d-flex justify-content-between align-items-center mb-3">

              <h5 className="fw-bold mb-0">
                Breed Distribution
              </h5>

            </div>

            <Chart
              options={breedOptions}
              series={breedSeries}
              type="donut"
              height={350}
            />

          </CardBody>

        </Card>

      </Col>

    </Row>

  );
};

export default DashboardCharts;