// import React from 'react'

import 
// React, 
{ Navigate } 
from "react-router-dom";
// import roleRoutes from "./roleRoutes.json";

// import { useSelector } from "react-redux";

import AdminDashboard from '../pages/Admin/ADashboard/AdminDashboard';
import Procurement from "../pages/Admin/Procurement/Procurement";
import AInventory from "../pages/Admin/AdminInventory/AInventory";
import Allocation from "../pages/Admin/Allocation/Allocation";



import StateOfficerDashboard from "../pages/StateOfficer/SODashboard/StateOfficerDashboard";
import StateProcurement from "../pages/StateOfficer/StateProcurement/StateProcurement";
import StateInventory from "../pages/StateOfficer/StateInventory/StateInventory";




import DOInventory from "../pages/DistrictOfficer/DOInventory/DOInventory";
import DODashboard from "../pages/DistrictOfficer/DODashboard/DODashboard";




import ErrorPage from "../pages/Error/ErrorPage";
import NotFound from "../pages/Error/NotFound";
import Login from "../pages/auth/Login";
import StateAllocation from "../pages/StateOfficer/StateAllocation/StateAllocation";

// const AdminDashboard = React.lazy(() => import("../pages/Admin/ADashboard/AdminDashboard"));


const pageRouters = [

    // admin
    { path: "/admin/dashboard", component: <AdminDashboard /> },
    { path: "/admin/procurement", component: <Procurement /> },
    { path: "/admin/inventory", component: <AInventory /> },
    { path: "/admin/allocation", component: <Allocation /> },
    
    
    //State Officer
    { path: "/state/dashboard", component: <StateOfficerDashboard /> },
    { path: "/state/procurement", component: <StateProcurement /> },
    { path: "/state/inventory", component: <StateInventory /> },
    { path: "/state/allocation", component: <StateAllocation /> },


    
    
    //District Officer
    { path: "/district/dashboard", component: <DODashboard /> },
    { path: "/district/inventory", component: <DOInventory /> },
    
    
    
    
    
    { path: "/", exact: true, component: <Navigate to="/login" />, },
    { path: "/login", component: <Login /> },


  {
    path: "/error",
    component: <ErrorPage />
  },

  /* 404 */

  {
    path: "*",
    component: <NotFound />
  }

]

export { pageRouters }
