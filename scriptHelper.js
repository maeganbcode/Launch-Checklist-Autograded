// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {

    if (testInput === "") {
        return "Empty";
    }

 } else if  (!isNaN(testInput)) {
        return "Is a Number";
    
 } else {
        return "Not a Number";
 }
}
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {

    const pilotStatus = document.getElementById("pilotName");
    const coPilotStatus = document.getElementById("coPilotName");
    const fuelLevelStatus = document.getElementById("fuelLevel");
    const cargoMassStatus = document.getElementById("cargoMass");

    if (validateInput(pilot) === "Empty" ||
        validateInput(coPilot) === "Empty" ||
        validateInput(fuelLevel) === "Empty" ||
        validateInput(cargoMass) === "Empty") {
            alert("all fields are required!");  
        
        }
    } else if (validateInput(fuelLevel) === "Not a Number" ||
                validateInput(cargoMass) === "Not a Number") {
                    alert("Please enter a number!");
    } else if  (validateInput(pilot) === "Is a Number" ||
                validateInput(coPilot) === "Is a Number") {
                    alert("Names should not include numbers!");
                }




     
   

    
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;