import ReactApexChart
from "react-apexcharts";

import {
  Card,
  CardBody
} from "reactstrap";

const ADCategoryWiseGrievanceChart = () => {

  const series = [
    44,
    24,
    18,
    14
  ];

  const options = {

    labels: [

      "AI Service",
      "Stock",
      "Delivery",
      "Technical"

    ],

    legend: {
      position: "bottom"
    }

  };

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Category Wise Grievances

        </h5>

        <ReactApexChart

          options={options}

          series={series}

          type="donut"

          height={320}

        />

      </CardBody>

    </Card>

  );

};

export default ADCategoryWiseGrievanceChart;