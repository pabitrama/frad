import ReactApexChart
from "react-apexcharts";

import {
  Card,
  CardBody
} from "reactstrap";

const GrievanceCategoryChart = () => {

  const series = [
    42,
    28,
    18,
    12
  ];

  const options = {

    labels: [

      "Stock Delay",
      "Service Quality",
      "Allocation Issue",
      "Technician Complaint"

    ],

    legend: {
      position: "bottom"
    }

  };

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Complaint Categories

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

export default GrievanceCategoryChart;