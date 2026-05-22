
import {
  Card,
  CardBody,
  ListGroup,
  ListGroupItem
} from "reactstrap";

const tabs = [

  "Profile",
  "Security",
  "Notifications",
  "System",
  "Theme",
  "Roles & Permissions",
  "Backup",
  "Database",
  "Activity Logs"

];

const ADSettingTabs = ({

  activeTab,
  setActiveTab

}) => {

  return (

    <Card className="border-0 shadow-sm">

      <CardBody className="p-0">

        <ListGroup flush>

          {tabs.map((item, index) => (

            <ListGroupItem

              key={index}

              action

              active={
                activeTab === item
              }

              onClick={() =>
                setActiveTab(item)
              }

              className="border-0"

            >

              {item}

            </ListGroupItem>

          ))}

        </ListGroup>

      </CardBody>

    </Card>

  );

};

export default ADSettingTabs;