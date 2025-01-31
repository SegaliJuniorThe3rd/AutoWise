import React, { useEffect, useState } from "react";
import { fetchRecommendations } from "../services/api";

const Recommendations = () => {
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        fetchRecommendations().then((response) => setRecommendations(response.data)).catch(console.error);
    }, []);

    return (
        <div>
            <h2>Maintenance Recommendations</h2>
            <ul>
                {recommendations.map((rec, index) => (
                    <li key={index}>{rec.recommendation}</li>
                ))}
            </ul>
        </div>
    );
};

export default Recommendations;
