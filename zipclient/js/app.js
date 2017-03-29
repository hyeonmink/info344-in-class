"use strict"

var baseURL = "http://localhost:8000/zips/city/"

var queryResults = document.querySelector(".query-results");
var searchForm = document.querySelector(".search-form");
var searchInput = searchForm.querySelector("input");
var searchButton = searchForm.querySelector("button");
var spinner = searchForm.querySelector("header .mdl-spinner");

function renderCity(city){

}

function render(data){
    
}


searchForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    var query = searchInput.value.trim();
    console.log(query)

    if(query.length <= 0) {
        return false;        
    }

    fetch(baseURL + query)
        .then(function(response){
            return response.json();
        })
        .then(render)
        .catch(function(err){
            console.log(err)
        })
    return false;
});
