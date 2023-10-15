import React from 'react';
import { calculateMean, calculateMedian, calculateMode } from '../utilities';
import { wineData } from '../constants/constants';
import { Link } from 'react-router-dom';

function Home() {
 


  //  unique classes of wineDta
  const uniqueClassLabels = Array.from(new Set(wineData.map(item => item.Alcohol)));

  return (
    <div className='statistics-container'>
      <h2>Flavanoids Statistics</h2>
      <Link to="/gama">See Gamma Stats</Link>

      <table className='table'>
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
              <td key={classLabel}>{calculateMean(wineData,classLabel,"Flavanoids")}</td>
            ))}
          </tr>
          <tr>
            <td>Median</td>
            {uniqueClassLabels.map((classLabel) => (
              <td key={classLabel}>{calculateMedian(wineData,classLabel,"Flavanoids")}</td>
            ))}
          </tr>
          <tr>
            <td>Mode</td>
            {uniqueClassLabels.map((classLabel) => (
              <td key={classLabel}>{calculateMode(wineData,classLabel,"Flavanoids")}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
