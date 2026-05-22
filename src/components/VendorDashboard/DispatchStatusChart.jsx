import ReactApexChart
from "react-apexcharts";

import {
  Card,
  CardBody
} from "reactstrap";

const DispatchStatusChart = () => {

  const series = [
    260,
    84,
    190
  ];

  const options = {

    chart: {
      type: "donut"
    },

    labels: [
      "Dispatched",
      "Pending",
      "Delivered"
    ],

    legend: {
      position: "bottom"
    },

    colors: [
      "#ff7a00",
      "#ffc107",
      "#198754"
    ]

  };

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-3">

          Dispatch Status

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

export default DispatchStatusChart;