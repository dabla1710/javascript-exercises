const convertToCelsius = function(fahrenheit) {
    //  	x °C ≘ (x × ⁠9/5⁠ + 32) °F 
    const celsius = (fahrenheit - 32) * 5 / 9;
    const roundedCelsius = Math.round(celsius * 10) / 10;
    return Number(roundedCelsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  //    x °F ≘ (x − 32) × ⁠5/9⁠ °C 
  const fahrenheit = celsius * 9 / 5 + 32;
  const roundedFahrenheit = Math.round(fahrenheit * 10) / 10;
  return Number(roundedFahrenheit.toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
