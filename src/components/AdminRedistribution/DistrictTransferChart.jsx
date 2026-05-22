import ReactApexChart
from "react-apexcharts";

import {
  Card,
  CardBody
} from "reactstrap";

const DistrictTransferChart = () => {

  const series = [
    42,
    26,
    18,
    14
  ];

  const options = {

    labels: [

      "Khordha",
      "Puri",
      "Cuttack",
      "Balasore"

    ],

    legend: {
      position: "bottom"
    }

  };

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-4">

          District Transfers

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

export default DistrictTransferChart;