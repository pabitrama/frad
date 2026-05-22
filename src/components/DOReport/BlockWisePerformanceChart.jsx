import ReactApexChart
from "react-apexcharts";

import {
  Card,
  CardBody
} from "reactstrap";

const BlockWisePerformanceChart = () => {

  const series = [

    {
      name: "Utilization",

      data: [
        420,
        380,
        520,
        610,
        470
      ]
    }

  ];

  const options = {

    chart: {
      toolbar: {
        show: false
      }
    },

    xaxis: {

      categories: [

        "Jatani",
        "Balianta",
        "Begunia",
        "Khordha",
        "Tangi"

      ]

    }

  };

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Block Wise Performance

        </h5>

        <ReactApexChart

          options={options}

          series={series}

          type="bar"

          height={320}

        />

      </CardBody>

    </Card>

  );

};

export default BlockWisePerformanceChart;