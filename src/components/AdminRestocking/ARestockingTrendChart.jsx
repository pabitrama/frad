import ReactApexChart
from "react-apexcharts";

import {
  Card,
  CardBody
} from "reactstrap";

const ARestockingTrendChart = () => {

  const series = [

    {
      name: "Restocking",

      data: [
        220,
        260,
        310,
        420,
        520,
        610,
        680,
        720,
        760,
        810,
        920,
        1010
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

          Monthly Restocking Trend

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

export default ARestockingTrendChart;
