import React, { useEffect, useState } from "react";
import { wineData } from "../constants/constants";
import {
  calculateGamma,
  calculateMean,
  calculateMedian,
  calculateMode,
} from "../utilities";
import { Link } from "react-router-dom";

function GammaStatistics() {
  const [newwineData, setNewwineData] = useState(null);
  useEffect(() => {
    setNewwineData(calculateGamma(wineData));
  }, []);

  //  unique classes of wineDta

  const uniqueClassLabels = Array.from(
    new Set(newwineData?.map((item) => item.Alcohol))
  );

  return (
    <div className="statistics-container">
      <h2>Gamma Statistics</h2>
      <Link to="/">See Flavanoid Stats</Link>

      <table className="table">
        <thead>
          <tr>
            <th>Measure</th>
            {uniqueClassLabels.map((classLabel) => (
              <th key={classLabel}>Class {classLabel}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mean</td>
            {uniqueClassLabels.map((classLabel) => (
              <td key={classLabel}>
                {calculateMean(newwineData, classLabel, "Gamma")}
              </td>
            ))}
          </tr>
          <tr>
            <td>Median</td>
            {uniqueClassLabels.map((classLabel) => (
              <td key={classLabel}>
                {calculateMedian(newwineData, classLabel, "Gamma")}
              </td>
            ))}
          </tr>
          <tr>
            <td>Mode</td>
            {uniqueClassLabels.map((classLabel) => (
              <td key={classLabel}>
                {calculateMode(newwineData, classLabel, "Gamma")}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GammaStatistics;
