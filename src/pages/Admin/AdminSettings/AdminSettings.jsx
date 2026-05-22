import React, {
  useState
} from "react";

import {
  Row,
  Col
} from "reactstrap";

import ADSettingHeader from "../../../components/AdminSettings/ADSettingHeader";

import ADSettingTabs from "../../../components/AdminSettings/ADSettingTabs";

import ADProfileSettings from "../../../components/AdminSettings/ADProfileSettings";

import ADSecuritySettings from "../../../components/AdminSettings/ADSecuritySettings";

import ADNotificationSettings from "../../../components/AdminSettings/ADNotificationSettings";

import ADSystemSettings from "../../../components/AdminSettings/ADSystemSettings";

import ADThemeSettings from "../../../components/AdminSettings/ADThemeSettings";

import ADRolePermissionSettings from "../../../components/AdminSettings/ADRolePermissionSettings";

import ADBackupSettings from "../../../components/AdminSettings/ADBackupSettings";

import ADDatabaseSettings from "../../../components/AdminSettings/ADDatabaseSettings";

import ADActivityLogs from "../../../components/AdminSettings/ADActivityLogs";

const AdminSettings = () => {

  const [activeTab, setActiveTab] =
    useState("Profile");

  const renderContent = () => {

    switch (activeTab) {

      case "Profile":
        return <ADProfileSettings />;

      case "Security":
        return <ADSecuritySettings />;

      case "Notifications":
        return <ADNotificationSettings />;

      case "System":
        return <ADSystemSettings />;

      case "Theme":
        return <ADThemeSettings />;

      case "Roles & Permissions":
        return <ADRolePermissionSettings />;

      case "Backup":
        return <ADBackupSettings />;

      case "Database":
        return <ADDatabaseSettings />;

      case "Activity Logs":
        return <ADActivityLogs />;

      default:
        return <ADProfileSettings />;

    }

  };

  return (
    <React.Fragment>
        <div className="ad-settings-page">

        {/* HEADER */}

        <ADSettingHeader />

        <Row>

            {/* SIDEBAR */}

            <Col lg="3" className="mb-4">

            <ADSettingTabs

                activeTab={activeTab}

                setActiveTab={setActiveTab}

            />

            </Col>

            {/* CONTENT */}

            <Col lg="9">

            {renderContent()}

            </Col>

        </Row>

        </div>
    </React.Fragment>
  );

};

export default AdminSettings;