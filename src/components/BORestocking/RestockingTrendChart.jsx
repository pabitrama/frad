import ReactApexChart
from "react-apexcharts";

import {
  Card,
  CardBody
} from "reactstrap";

const RestockingTrendChart = () => {

  const series = [

    {
      name: "Restocking Requests",

      data: [
        20,
        28,
        25,
        30,
        34,
        38,
        42,
        40,
        44,
        46,
        48,
        52
      ]
    }

  ];

  const options = {

    chart: {

      type: "line",

      toolbar: {
        show: false
      }

    },

    stroke: {

      curve: "smooth",

      width: 3

    },

    xaxis: {

      categories: [

        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May"

      ]

    },

    colors: [
      "#ff7a00"
    ]

  };

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-3">

          Restocking Trend

        </h5>

        <ReactApexChart

          options={options}

          series={series}

          type="line"

          height={350}

        />

      </CardBody>

    </Card>

  );

};

export default RestockingTrendChart;