import ReactApexChart
from "react-apexcharts";

import {
  Card,
  CardBody
} from "reactstrap";

const MonthlyUtilizationChart = () => {

  const series = [

    {
      name: "Utilization",

      data: [
        320,
        410,
        390,
        520,
        610,
        720,
        690,
        740,
        680,
        790,
        860,
        920
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

    },

    stroke: {
      curve: "smooth"
    },

    colors: [
      "#ff7a00"
    ]

  };

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Monthly Utilization Trend

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

export default MonthlyUtilizationChart;