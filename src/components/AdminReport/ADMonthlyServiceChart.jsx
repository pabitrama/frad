import ReactApexChart
from "react-apexcharts";

import {
  Card,
  CardBody
} from "reactstrap";

const ADMonthlyServiceChart = () => {

  const series = [

    {
      name: "Services",

      data: [
        420,
        520,
        610,
        720,
        810,
        920,
        1040,
        1160,
        1240,
        1380,
        1490,
        1620
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

          Monthly AI Services Report

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

export default ADMonthlyServiceChart;