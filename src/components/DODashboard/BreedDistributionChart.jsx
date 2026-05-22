import ReactApexChart
from "react-apexcharts";

import {
  Card,
  CardBody
} from "reactstrap";

const BreedDistributionChart = () => {

  const series = [
    44,
    25,
    18,
    13
  ];

  const options = {

    labels: [
      "Holstein",
      "Gir",
      "Jersey",
      "HF Cross"
    ],

    legend: {
      position: "bottom"
    },

    colors: [
      "#ff7a00",
      "#1e3a8a",
      "#198754",
      "#ffc107"
    ]

  };

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Breed Distribution

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

export default BreedDistributionChart;