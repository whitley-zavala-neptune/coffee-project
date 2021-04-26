"use strict"

function renderCoffee(coffee) {
    var html = '<div class="container d-flex coffee row col-5 ">';
    //html += '<div>' + coffee.id + '</div>';
    html += '<div class="" id="coffeeName">' + coffee.name + '</div>';
    html += '<div class="" id="roastName">' + coffee.roast + '</div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    var searchedName = "" + nameSelection.value;
    var searchResults = [];

    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        if (selectedRoast === "all"){
            filteredCoffees.push(coffee);
        }

    });
    tbody.innerHTML = renderCoffees(filteredCoffees);

    // for (var i =0; i < filteredCoffees.length; i++){
    //     if (filteredCoffees[i] == searchedName){
    //         searchResults.push(filteredCoffees[i]);
    //     }
    // }
    // // tbody.innerHTML = renderCoffees(searchResults);
    // console.log(searchedName);
    // console.log(searchResults);

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
var submitButton = document.querySelector('#submit');
var searchButton = document.querySelector('#search');
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector('#userInput');

tbody.innerHTML = renderCoffees(coffees);


submitButton.addEventListener('click', updateCoffees);
searchButton.addEventListener('click', updateCoffees);
