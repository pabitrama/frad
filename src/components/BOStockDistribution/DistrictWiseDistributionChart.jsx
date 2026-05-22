import ReactApexChart
from "react-apexcharts";

import {
  Card,
  CardBody
} from "reactstrap";

const DistrictWiseDistributionChart = () => {

  const series = [

    {
      name: "Distribution",

      data: [
        1200,
        1800,
        1400,
        1700,
        2000
      ]
    }

  ];

  const options = {

    chart: {

      type: "bar",

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

    },

    colors: [
      "#ff7a00"
    ],

    plotOptions: {

      bar: {

        borderRadius: 4,

        columnWidth: "45%"
      }

    }

  };

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-3">

          District Wise Distribution

        </h5>

        <ReactApexChart

          options={options}

          series={series}

          type="bar"

          height={350}

        />

      </CardBody>

    </Card>

  );

};

export default DistrictWiseDistributionChart;