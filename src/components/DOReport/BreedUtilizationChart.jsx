import ReactApexChart
from "react-apexcharts";

import {
  Card,
  CardBody
} from "reactstrap";

const BreedUtilizationChart = () => {

  const series = [
    44,
    26,
    18,
    12
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
    }

  };

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Breed Utilization

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

export default BreedUtilizationChart;