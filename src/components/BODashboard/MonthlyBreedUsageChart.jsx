import ReactApexChart
from "react-apexcharts";

import {
  Card,
  CardBody
} from "reactstrap";

const MonthlyBreedUsageChart = () => {

  const series = [

    {
      name: "Breed Usage",

      data: [
        120,
        145,
        170,
        155,
        180,
        210,
        230,
        250,
        270,
        290,
        310,
        340
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

    plotOptions: {

      bar: {

        borderRadius: 4,

        columnWidth: "45%"
      }

    },

    dataLabels: {
      enabled: false
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

        <div className="d-flex justify-content-between align-items-center mb-3">

          <h5 className="fw-bold mb-0">

            Previous 12 Months Breed Usage

          </h5>

        </div>

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

export default MonthlyBreedUsageChart;