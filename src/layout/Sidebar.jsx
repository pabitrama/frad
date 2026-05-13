// import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import roleRoutes from "../routes/roleRoutes.json";

const Sidebar = ({
  sidebarOpen
}) => {

  const { role } = useSelector(
    (state) => state.auth
  );

  const menuItems =
    roleRoutes?.[role]?.pages || [];

  return (

    <aside
      className={`sidebar ${
        sidebarOpen
          ? "sidebar-open"
          : "sidebar-close"
      }`}
    >

      <div className="sidebar-menu">

        {menuItems.map((item, index) => (

          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >

            <i className={item.icon}></i>

            {sidebarOpen && (
              <span>
                {item.name}
              </span>
            )}

          </NavLink>

        ))}

      </div>

    </aside>
  );
};

export default Sidebar;