import React from "react";
import VehicleStatus from "./VehicleStatus";
import FaultAlerts from "./FaultAlerts";
import Recommendations from "./Recommendations";

const Dashboard = () => {
    return (
        <div className="container mt-4">
            <h1 className="text-center text-primary">AutoWise Dashboard</h1>
            <div className="row">
                <div className="col-md-4">
                    <VehicleStatus />
                </div>
                <div className="col-md-4">
                    <FaultAlerts />
                </div>
                <div className="col-md-4">
                    <Recommendations />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
