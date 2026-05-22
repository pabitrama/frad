import ReactApexChart
from "react-apexcharts";

import {
  Card,
  CardBody
} from "reactstrap";

const DistrictPerformanceChart = () => {

  const series = [

    {
      name: "Utilization",

      data: [
        820,
        910,
        1040,
        1180,
        980
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

        "Khordha",
        "Cuttack",
        "Puri",
        "Balasore",
        "Sambalpur"

      ]

    }

  };

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-4">

          District Performance

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

export default DistrictPerformanceChart;