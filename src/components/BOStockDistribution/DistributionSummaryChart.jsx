import ReactApexChart
from "react-apexcharts";

import {
  Card,
  CardBody
} from "reactstrap";

const DistributionSummaryChart = () => {

  const series = [
    16200,
    1840,
    500
  ];

  const options = {

    labels: [
      "Delivered",
      "In Transit",
      "Cancelled"
    ],

    chart: {
      type: "donut"
    },

    legend: {
      position: "bottom"
    },

    colors: [
      "#00b894",
      "#ff9800",
      "#dc3545"
    ]

  };

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-3">

          Distribution Summary

        </h5>

        <ReactApexChart

          options={options}

          series={series}

          type="donut"

          height={320}

        />

      </CardBody>

    </Card>

  );

};

export default DistributionSummaryChart;