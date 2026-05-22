import {
  Card,
  CardBody,
  Table,
  Input
} from "reactstrap";

const roles = [

  "Admin",
  "State Officer",
  "District Officer",
  "Block Officer",
  "AI Technician",
  "Vendor"

];

const ADRolePermissionSettings = () => {

  return (

    <Card className="border-0 shadow-sm">

      <CardBody>

        <h5 className="fw-bold mb-4">

          Role & Permission Settings

        </h5>

        <Table bordered responsive>

          <thead>

            <tr>

              <th>
                Role
              </th>

              <th>
                Access
              </th>

            </tr>

          </thead>

          <tbody>

            {roles.map((role, index) => (

              <tr key={index}>

                <td>

                  {role}

                </td>

                <td>

                  <Input
                    type="checkbox"
                    defaultChecked
                  />

                </td>

              </tr>

            ))}

          </tbody>

        </Table>

      </CardBody>

    </Card>

  );

};

export default ADRolePermissionSettings;