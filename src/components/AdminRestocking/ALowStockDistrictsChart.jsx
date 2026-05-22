import ReactApexChart
from "react-apexcharts";

import {
  Card,
  CardBody
} from "reactstrap";

const ALowStockDistrictsChart = () => {

  const series = [
    38,
    24,
    18,
    12,
    8
  ];

  const options = {

    labels: [

      "Khordha",
      "Puri",
      "Cuttack",
      "Balasore",
      "Sambalpur"

    ],

    legend: {
      position: "bottom"
    }

  };

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Low Stock Districts

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

export default ALowStockDistrictsChart;