// Code your solution in this file!
// Function to return the first two drivers from an array
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

// Function to return the last two drivers from an array
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

// Array containing the two driver functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function to create a fare multiplier function
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// Function to double the fare
const fareDoubler = createFareMultiplier(2);

// Function to triple the fare
const fareTripler = createFareMultiplier(3);

// Function to select different drivers based on the provided function
function selectDifferentDrivers(drivers, driverFunction) {
  return driverFunction(drivers);
}

// Export the functions if using a module system
module.exports = { 
  returnFirstTwoDrivers, 
  returnLastTwoDrivers, 
  selectingDrivers, 
  createFareMultiplier, 
  fareDoubler, 
  fareTripler, 
  selectDifferentDrivers 
};
