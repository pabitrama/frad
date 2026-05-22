import {
  Card,
  CardBody
} from "reactstrap";

const insights = [

  {
    text: "Holstein demand increased by 18% this month"
  },

  {
    text: "Khordha district achieved highest utilization"
  },

  {
    text: "Redistribution reduced stock shortage by 26%"
  }

];

const StateReportInsights = () => {

  return (

    <Card className="border-0 shadow-sm h-100">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Key Insights

        </h5>

        {insights.map((item, index) => (

          <div
            key={index}
            className="border-bottom pb-3 mb-3"
          >

            <p className="mb-0">

              {item.text}

            </p>

          </div>

        ))}

      </CardBody>

    </Card>

  );

};

export default StateReportInsights;