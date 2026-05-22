import ReactApexChart
from "react-apexcharts";

import {
  Card,
  CardBody
} from "reactstrap";

const TechnicianPerformanceChart = () => {

  const series = [
    44,
    28,
    18,
    10
  ];

  const options = {

    labels: [

      "Excellent",
      "Good",
      "Average",
      "Poor"

    ],

    legend: {
      position: "bottom"
    }

  };

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Technician Performance

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

export default TechnicianPerformanceChart;