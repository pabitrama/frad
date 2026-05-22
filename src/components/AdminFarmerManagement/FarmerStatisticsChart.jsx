import ReactApexChart
from "react-apexcharts";

import {
  Card,
  CardBody
} from "reactstrap";

const FarmerStatisticsChart = () => {

  const series = [

    {
      name: "Registrations",

      data: [
        120,
        160,
        180,
        220,
        260,
        310,
        340,
        380,
        420,
        460,
        510,
        580
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

          Farmer Registration Trend

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

export default FarmerStatisticsChart;