// This IIFE will add a new module to Carlot in the
// namespace of CarLot.Inventory
var CarLot = (function(globalScopeCarLot) {

  // Define a private scope variable to store cars
  // let carInventory = [];


  globalScopeCarLot.getJson = function(url, callback) {
    let loadCarsData = new XMLHttpRequest();

    loadCarsData.addEventListener('load', callback);
    loadCarsData.addEventListener('error', (error) => console.log(error));

    loadCarsData.open('GET', url);
    loadCarsData.send();
  }


  // globalScopeCarLot.getJson = inventory;
  return globalScopeCarLot;

// If this is the first module that gets evaluated,
// CarLot will be `undefined` and a new empty object
// will augmented.
})(CarLot || {});
