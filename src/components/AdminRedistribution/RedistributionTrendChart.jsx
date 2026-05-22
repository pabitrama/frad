import ReactApexChart
from "react-apexcharts";

import {
  Card,
  CardBody
} from "reactstrap";

const RedistributionTrendChart = () => {

  const series = [

    {
      name: "Transfers",

      data: [
        120,
        180,
        240,
        310,
        420,
        510,
        620,
        680,
        720,
        810,
        920,
        1040
      ]
    }

  ];

  const options = {

    chart: {
      toolbar: {
        show: false
      }
    },

    stroke: {
      curve: "smooth"
    },

    xaxis: {

      categories: [

        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"

      ]

    }

  };

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Redistribution Trend

        </h5>

        <ReactApexChart

          options={options}

          series={series}

          type="line"

          height={320}

        />

      </CardBody>

    </Card>

  );

};

export default RedistributionTrendChart;