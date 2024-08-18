

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
 } else if (!isNaN(testInput)) {
        return "Is a Number";    
 } else {
        return "Not a Number";
 }
}

 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {

    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("coPilotStatus");
    const fuelLevelStatus = document.getElementById("fuelLevelStatus");
    const cargoMassStatus = document.getElementById("cargoMassStatus");
    
    if (validateInput(pilot) === "Empty" ||
        validateInput(copilot) === "Empty" ||
        validateInput(fuelLevel) === "Empty" ||
        validateInput(cargoMass) === "Empty") {
            alert("all fields are required!");  

         } else if  (validateInput(pilot) === "Is a Number" ||
              validateInput(copilot) === "Is a Number") {
              alert("Names should not include numbers!");
        
               } else if  (validateInput(fuelLevel) === "Not a Number" ||
                validateInput(cargoMass) === "Not a Number") {
                    alert("Please enter a valid number!");
                
             } else {
                list.style.visibility = "visible";
                pilotStatus.innerHTML = `Pilot ${pilot} is ready`;
                copilotStatus.innerHTML = `Co-pilot ${copilot} is ready`;

             }}

             if (fuelLevel < 100000) {
                faultyItems.style.visibility = "visible";
                fuelLevelStatus.innerHTML = "Not enough fuel for the journey."
                launchStatus.innerHTML = "Shuttle not ready for launch";
                launchStatus.color= "red";
             }

             if(cargoMass > 10000) {





     
   

    
 
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