"use strict"

function renderCoffee(coffee) {
    var html = '<div class="container d-flex coffee row col-4" id="boxes">';
    //html += '<div>' + coffee.id + '</div>';
    html += '<div class="" id="coffeeName">' + coffee.name + '</div>';
    html += '<div class="" id="roastName">' + coffee.roast + '</div>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        if(coffees[i].roast === 'dark') {
            html += renderCoffee(coffees[i]);
        }
    }
    for(var i = coffees.length - 1; i >= 0; i--) {
        if(coffees[i].roast === 'medium') {
            html += renderCoffee(coffees[i]);
        }
    }
    for(var i = coffees.length - 1; i >= 0; i--) {
        if(coffees[i].roast === 'light') {
            html += renderCoffee(coffees[i]);
        }
    }
    return html;
}

//add a new object

function addNewCoffee(){
    var newId = coffees.length + 1;
    var newCoffee = newName.value;
    var newRoastName = newRoast.value;

    coffees.push({id:newId, name:newCoffee, roast: newRoastName},);

}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var searchedName = nameSelection.value;
    var filteredCoffees = [];

    var newObj = [{}]

    coffees.forEach(function(coffee) {
        if((coffee.name.toLowerCase()).includes(searchedName.toLowerCase()) &&  coffee.roast === selectedRoast){
            filteredCoffees.push(coffee);
        }
        else if (selectedRoast === "all"){
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);

    //new coffee selection
    // coffees.forEach(function (newCoffee){
    //     if ((coffee.name.toLowerCase()) !== newCoffee.toLowerCase() && newCoffee !== ""){
    //         newObj = [{name: newCoffee, roast: newRoastName}];
    //         filteredCoffees.push(newObj);
  //     }
// });

}

// document.setAttribute(coffees.name).style("text-weight", "bold")

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector('#userInput');
var newCoffeeSubmit = document.querySelector('#newCoffeeSubmit');
//User input - new coffee
var newName = document.querySelector('#newCoffeeName');
var newRoast = document.querySelector('#newRoastSelection');

tbody.innerHTML = renderCoffees(coffees); <!--.reverse() to flip the array so light appears first-->

roastSelection.addEventListener('change', updateCoffees);
nameSelection.addEventListener('keyup', updateCoffees);
//event listener for new coffee button
newCoffeeSubmit.addEventListener('click', addNewCoffee);
newCoffeeSubmit.addEventListener('click', updateCoffees);

