function calculateSum(elements) {
  return elements.reduce((prev, curr) => (prev += curr), 0);
}

function calculateAverage(elements) {
  return calculateSum(elements) / elements.length;
}

export function analyzeArray(array) {
  if (!array.length)
    return { average: null, min: null, max: null, length: null };

  return {
    min: Math.min(...array),
    max: Math.max(...array),
    average: calculateAverage(array),
    length: array.length,
  };
}
