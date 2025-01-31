import React, { useEffect, useState } from "react";
import { fetchVehicleData } from "../services/api";

const VehicleStatus = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchVehicleData().then((response) => setData(response.data)).catch(console.error);
    }, []);

    return (
        <div>
            <h2>Vehicle Status</h2>
            {data ? (
                <ul>
                    <li>Engine Temperature: {data.engineTemperature}°C</li>
                    <li>Oil Pressure: {data.oilPressure} PSI</li>
                    <li>Speed: {data.speed} km/h</li>
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default VehicleStatus;
