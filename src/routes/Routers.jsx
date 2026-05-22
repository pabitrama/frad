// import React from 'react'

import 
// React, 
{ Navigate } 
from "react-router-dom";
// import roleRoutes from "./roleRoutes.json";

// import { useSelector } from "react-redux";


// Admin
import AdminDashboard from '../pages/Admin/ADashboard/AdminDashboard';
import Procurement from "../pages/Admin/Procurement/Procurement";
import AInventory from "../pages/Admin/AdminInventory/AInventory";
import Allocation from "../pages/Admin/Allocation/Allocation";
import AdminAIServices from "../pages/Admin/AdminAIServices/AdminAIServices";
import FarmerManagement from "../pages/Admin/FarmerManagement/FarmerManagement";
import AdminRestocking from "../pages/Admin/AdminRestocking/AdminRestocking";
import AdminRedistribution from "../pages/Admin/AdminRedistribution/AdminRedistribution";
import AdminReports from "../pages/Admin/AdminReports/AdminReports";
import AdminGrievance from "../pages/Admin/AdminGrievance/AdminGrievance";
import AdminSettings from "../pages/Admin/AdminSettings/AdminSettings";



// State Officer
import StateOfficerDashboard from "../pages/StateOfficer/SODashboard/StateOfficerDashboard";
import StateProcurement from "../pages/StateOfficer/StateProcurement/StateProcurement";
import StateInventory from "../pages/StateOfficer/StateInventory/StateInventory";
import StateReports from "../pages/StateOfficer/StateReports/StateReports";
import StateGrievances from "../pages/StateOfficer/StateGrievances/StateGrievances";
import StateAllocation from "../pages/StateOfficer/StateAllocation/StateAllocation";



// District Officer
import DOInventory from "../pages/DistrictOfficer/DOInventory/DOInventory";
import DODashboard from "../pages/DistrictOfficer/DODashboard/DODashboard";
import AllocationRequest from "../pages/DistrictOfficer/AllocationRequest/AllocationRequest";
import Redistribution from "../pages/DistrictOfficer/Redistribution/Redistribution";
import DOReport from "../pages/DistrictOfficer/DOReport/DOReport";



//Block Officer
import BODashboard from "../pages/BlockOfficer/BODashboard/BODashboard";
import StockDistribution from "../pages/BlockOfficer/StockDistribution/StockDistribution";
import BORestocking from "../pages/BlockOfficer/BORestocking/BORestocking";
import TechnicianAssignment from "../pages/BlockOfficer/TechnicianAssignment/TechnicianAssignment";


// Vendor
import VendorDashboard from "../pages/Vendor/VendorDashboard/VendorDashboard";
import SupplyOrders from "../pages/Vendor/SupplyOrder/SupplyOrders";
import DispatchEntry from "../pages/Vendor/DispatchEntries/DispatchEntry";
import DeliveryStatus from "../pages/Vendor/DeliveryStatus/DeliveryStatus";


// AI Technician
import AITechnicianDashboard from "../pages/AiTechnician/AITDashboard/AITechnicianDashboard";
import FarmerRegistration from "../pages/AiTechnician/FarmerRegistration/FarmerRegistration";
import AnimalRegistration from "../pages/AiTechnician/AnimalRegistration/AnimalRegistration";
import AIService from "../pages/AiTechnician/AIService/AIService";
import ServiceHistory from "../pages/AiTechnician/ServiceHistory/ServiceHistory";



import ErrorPage from "../pages/Error/ErrorPage";
import NotFound from "../pages/Error/NotFound";
import Login from "../pages/auth/Login";

// const AdminDashboard = React.lazy(() => import("../pages/Admin/ADashboard/AdminDashboard"));


const pageRouters = [

    // admin
    { path: "/admin/dashboard", component: <AdminDashboard /> },
    { path: "/admin/procurement", component: <Procurement /> },
    { path: "/admin/inventory", component: <AInventory /> },
    { path: "/admin/allocation", component: <Allocation /> },
    { path: "/admin/ai-services", component: <AdminAIServices /> },
    { path: "/admin/farmers", component: <FarmerManagement /> }, 
    { path: "/admin/restocking", component: <AdminRestocking /> }, 
    { path: "/admin/redistribution", component: <AdminRedistribution /> },
    { path: "/admin/reports", component: <AdminReports /> },
    { path: "/admin/grievances", component: <AdminGrievance /> },
    { path: "/admin/settings", component: <AdminSettings /> },



    //State Officer
    { path: "/state/dashboard", component: <StateOfficerDashboard /> },
    { path: "/state/procurement", component: <StateProcurement /> },
    { path: "/state/inventory", component: <StateInventory /> },
    { path: "/state/allocation", component: <StateAllocation /> },
    { path: "/state/reports", component: <StateReports /> },
    { path: "/state/grievances", component: <StateGrievances /> },

    
    
    
    //District Officer
    { path: "/district/dashboard", component: <DODashboard /> },
    { path: "/district/inventory", component: <DOInventory /> },
    { path: "/district/allocation-request", component: <AllocationRequest /> },
    { path: "/district/redistribution", component: <Redistribution /> },
    { path: "/district/reports", component: <DOReport /> },

    
    //Block Officer
    { path: "/block/dashboard", component: <BODashboard /> },
    { path: "/block/stock-distribution", component: <StockDistribution /> },
    { path: "/block/restocking", component: <BORestocking /> },
    { path: "/block/technician-assignment", component: <TechnicianAssignment /> },

    //Vendor
    { path: "/vendor/dashboard", component: <VendorDashboard /> },
    { path: "/vendor/supply-orders", component: <SupplyOrders /> },
    { path: "/vendor/dispatch-entry", component: <DispatchEntry />},
    { path: "/vendor/delivery-status", component: <DeliveryStatus />},

    // AI Technician
    { path: "/technician/dashboard", component: <AITechnicianDashboard /> },
    { path: "/technician/farmer-registration", component: <FarmerRegistration /> },
    { path: "/technician/animal-registration", component: <AnimalRegistration /> },
    { path: "/technician/ai-service", component: <AIService /> },
    { path: "/technician/service-history", component: <ServiceHistory /> },
    
    
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
