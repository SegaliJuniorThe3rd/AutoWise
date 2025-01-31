import React from "react";
import VehicleStatus from "./VehicleStatus";
import FaultAlerts from "./FaultAlerts";
import Recommendations from "./Recommendations";

const Dashboard = () => {
    return (
        <div>
            <h1>AutoWise Dashboard</h1>
            <VehicleStatus />
            <FaultAlerts />
            <Recommendations />
        </div>
    );
};

export default Dashboard;
