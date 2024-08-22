

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = 
     
    `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">
    `
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
    const copilotStatus = document.getElementById("copilotStatus");
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

             
             if (fuelLevel < 100000) {
                faultyItems.style.visibility = "visible";
                fuelLevelStatus.innerHTML = `Fuel level ${fuelLevel} too low for launch`;
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.color= "red";
             

             } else if(cargoMass > 100000) {
                faultyItems.style.visibility = "visible";
                cargoMassStatus.innerHTML = "Cargo mass too heavy for launch";
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.color= "red";

             } else {
                launchStatus.color= "green";
                launchStatus.innerHTML = "Shuttle is Ready for Launch";

             } 
            }
        }    
    
 
 async function myFetch() {
    
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
     });
          
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random() * planets.length);
    return planets[randomPlanet];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;