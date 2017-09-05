var CarLot = (function(globalScopeCarLot) {
  // Start building the Object that will be attached
  // to the CarLot.Inventory namespace
  globalScopeCarLot.inventory = function() {
    // let students = JSON.parse(this.responseText);
    let carData = JSON.parse(this.responseText);
    console.log(carData);
    showCarData(carData);
  }

  function showCarData(carData) {
    carData.cars.forEach((carInfo) => {
    carsDiv.innerHTML += `<h1>Name: ${carInfo.make}</h1>
                              <p>Model: ${carInfo.model}</p>
                              <p>Year: ${carInfo.year}</p>
                              <p>Price: ${carInfo.price}</p>
                              <p>Description: ${carInfo.description}</p>`;
    });
  }

  return globalScopeCarLot;
// If this is the first module that gets evaluated,
// CarLot will be `undefined` and a new empty object
// will augmented.
})(CarLot || {});


