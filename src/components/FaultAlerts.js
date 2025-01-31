import React, { useEffect, useState } from "react";
import { fetchFaultAlerts } from "../services/api";

const FaultAlerts = () => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        fetchFaultAlerts().then((response) => setAlerts(response.data)).catch(console.error);
    }, []);

    return (
        <div>
            <h2>Fault Alerts</h2>
            <ul>
                {alerts.map((alert, index) => (
                    <li key={index}>{alert.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default FaultAlerts;
