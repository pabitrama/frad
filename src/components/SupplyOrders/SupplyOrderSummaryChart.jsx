import ReactApexChart
from "react-apexcharts";

import {
  Card,
  CardBody
} from "reactstrap";

const SupplyOrderSummaryChart = () => {

  const series = [
    210,
    42,
    18
  ];

  const options = {

    chart: {
      type: "donut"
    },

    labels: [
      "Approved",
      "Pending",
      "Rejected"
    ],

    legend: {
      position: "bottom"
    },

    colors: [
      "#198754",
      "#ffc107",
      "#dc3545"
    ]

  };

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-3">

          Order Summary

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

export default SupplyOrderSummaryChart;