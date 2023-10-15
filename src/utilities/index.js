// mean calculation

export const calculateMean = (wineData,className,propertyName) => {
    const classData = wineData.filter(dataPoint => dataPoint.Alcohol === className);
    const sum = classData.reduce((total, dataPoint) => total + parseFloat(dataPoint[propertyName]), 0);
    return (sum / classData.length).toFixed(3);
  };



  //median calculation

 export  const calculateMedian = (wineData,className,propertyName) => {
    const classData = wineData
      .filter(dataPoint => dataPoint.Alcohol === className)
      .map(dataPoint => parseFloat(dataPoint[propertyName]))
      .sort((a, b) => a - b);

    const middle = Math.floor(classData.length / 2);

    if (classData.length % 2 === 0) {
      return ((classData[middle - 1] + classData[middle]) / 2).toFixed(3);
    } else {
      return classData[middle].toFixed(3);
    }
  };


  //mode calculation

  export const calculateMode = (wineData,className,propertyName) => {
    const classData = wineData.filter(dataPoint => dataPoint.Alcohol === className);

    const valueCounts = {};
    let mode = null;
    let maxCount = 0;

    classData.forEach(dataPoint => {
      const value = dataPoint[propertyName];
      valueCounts[value] = (valueCounts[value] || 0) + 1;

      if (valueCounts[value] > maxCount) {
        mode = value;
        maxCount = valueCounts[value];
      }
    });

  return mode !== null ? mode.toFixed(3) : 0;
  };


  //calculate gaama

  export const calculateGamma = (data) => {
    return data.map(dataPoint => ({
      ...dataPoint,
      Gamma: (parseFloat(dataPoint.Ash) * parseFloat(dataPoint.Hue)) / parseFloat(dataPoint.Magnesium)
    }));
  };
  
 
  