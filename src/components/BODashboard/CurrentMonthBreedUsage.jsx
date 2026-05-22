import ReactApexChart
from "react-apexcharts";

import {
  Card,
  CardBody
} from "reactstrap";

const CurrentMonthBreedUsage = () => {

  /* =========================================
     CHART DATA
  ========================================= */

  const series = [
    320,
    280,
    410,
    220,
    510
  ];

  const options = {

    chart: {

      type: "donut"

    },

    labels: [

      "Holstein",
      "Gir",
      "Jersey",
      "HF Cross",
      "Sahiwal"

    ],

    legend: {

      position: "bottom",

      fontSize: "14px"

    },

    dataLabels: {

      enabled: true

    },

    plotOptions: {

      pie: {

        donut: {

          size: "65%"

        }

      }

    },

    colors: [

      "#ff7a00",
      "#1e3a8a",
      "#00b894",
      "#fdcb6e",
      "#6c5ce7"

    ],

    responsive: [

      {

        breakpoint: 768,

        options: {

          chart: {

            height: 300

          },

          legend: {

            position: "bottom"

          }

        }

      }

    ]

  };

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        {/* HEADER */}

        <div className="d-flex justify-content-between align-items-center mb-3">

          <h5 className="fw-bold mb-0">

            Current Month Breed Usage

          </h5>

        </div>

        {/* DONUT CHART */}

        <ReactApexChart

          options={options}

          series={series}

          type="donut"

          height={350}

        />

      </CardBody>

    </Card>

  );

};

export default CurrentMonthBreedUsage;