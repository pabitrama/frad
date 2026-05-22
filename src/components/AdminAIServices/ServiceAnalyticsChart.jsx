import ReactApexChart
from "react-apexcharts";

import {
  Card,
  CardBody
} from "reactstrap";

const ServiceAnalyticsChart = () => {

  const series = [

    {
      name: "AI Services",

      data: [
        920,
        1040,
        980,
        1120,
        1280,
        1390,
        1480,
        1560,
        1490,
        1620,
        1710,
        1840
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

          Monthly AI Services

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

export default ServiceAnalyticsChart;