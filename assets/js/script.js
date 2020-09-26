//alert("Here")
// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
var airContainerEl = document.querySelector("#air-container");
var locationInputEl = document.querySelector("#location-input");
var resultsBox = document.querySelector("#results");
var inputEl = document.querySelector("#input-value");
var selectEl = document.querySelector("#state-select");
var userCityInput = "";
var userStateCode = "";
var userStateInput = "";
var aqiWidget = document.querySelector("#aqi-widget");
var lat = 0;
var lon = 0;

// hidden the result
document.querySelector("#resultRow").style.display = "none";

var getAirQuality = function () {
  console.log(inputEl);
  var apiUrl =
    "https://api.airvisual.com/v2/city?city=" +
    userCityInput +
    "&state=" +
    userStateInput +
    "&country=USA&key=9e6807b2-9614-47e1-b226-73369e760983";
  // make a request to the url
  fetch(apiUrl).then(function (response) {
    console.log(response);
    // request was successful
    if (response.ok) {
      response.json().then(function (data) {
        displayAirData(data);
        console.log(data);
        console.log("okay dokie");
        lon = data.data.location.coordinates[0];
        lat = data.data.location.coordinates[1];
        console.log(lat);
        console.log(lon);
        getHikeData();
        success(position);
      });
    } else {
      alert("Error: " + response.statusText);
    }
  });
};
// getAirQuality();

var displayAirData = function (airdata) {
  // check if api returned any repos

  if (airdata.length === 0) {
    //repoContainerEl.textContent = "No repositories found.";
    alert("No repositories found");
    return;
  }

  //var repoName = airdata[i].owner.login + "/" + repos[i].name;
  console.log(airdata);

  for (var i = 0; i < airdata.length; i++) {
    // format repo name
    //var airDataName = [i].owner.login + "/" + repos[i].name;
    console.log("Air data" + airdata[i]);
    // create a container for each repo
  }
};

function success(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;

  var queryURL =
    "https://api.airvisual.com/v2/nearest_city?lat=" +
    lat +
    "&lon=" +
    lon +
    "&key=9e6807b2-9614-47e1-b226-73369e760983";
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      displayAirData();
    });
}

var getHikeData = function () {
  console.log("Getting here");
  var apiUrl =
    "https://www.hikingproject.com/data/get-trails?lat=" +
    lat +
    "&lon=" +
    lon +
    "&maxDistance=10&key=200920899-e14060291ce05aae74df93b6c9e5abc8";
  // make a request to the url
  fetch(apiUrl).then(function (response) {
    // request was successful
    if (response.ok) {
      response.json().then(function (data) {
        displayHikeData(data);
        console.log(data);
        //console.log("okay dokie")
      });
    } else {
      alert("Error: " + response.statusText);
    }
  });
};
// getHikeData();

var displayHikeData = function (hikeData) {
  // check if api returned any repos

  if (hikeData.length === 0) {
    //repoContainerEl.textContent = "No repositories found.";
    alert("No repositories found");
    return;
  }

  console.log(hikeData);

  // loop over repos
  for (var i = 0; i < hikeData.trails.length; i++) {
    // display images
    var img = document.createElement("img");
    var imgSrc = hikeData.trails[i].imgSmallMed;
    // console.log(imgSrc + "SUP FOO");
    img.setAttribute("src", imgSrc);
    img.setAttribute("alt", "Trail View");

    //display location
    var cityNameDiv = document.createElement("div");
    var cityName = hikeData.trails[i].location;
    cityNameDiv.setAttribute("class", "city-name");
    cityNameDiv.textContent = cityName;

    //display trail name
    var trailNameDiv = document.createElement("div");
    var trailName = hikeData.trails[i].name;
    trailNameDiv.setAttribute("class", "trail-name");
    trailNameDiv.textContent = trailName;

    //display trail length
    var trailLengthDiv = document.createElement("div");
    var trailLength = hikeData.trails[i].length;
    trailLengthDiv.setAttribute("class", "trail-length");
    trailLengthDiv.textContent = trailLength + " miles";

    //display trail difficulty
    var trailDifficultyDiv = document.createElement("div");
    var trailDifficulty = hikeData.trails[i].difficulty;
    trailDifficultyDiv.setAttribute("class", "trail-difficulty");
    trailDifficultyDiv.textContent = trailDifficulty;

    resultsBox = document.querySelector("#results");

    resultsBox.prepend(trailDifficultyDiv);
    resultsBox.prepend(trailLengthDiv);
    resultsBox.prepend(trailNameDiv);
    resultsBox.prepend(cityNameDiv);
    resultsBox.prepend(img);
  }
  //var Data1 = "Air Data 1"
  // console.log(hikeData.trails[0].name);
  // create a span element to hold repository name
  var titleEl = document.createElement("span");
  // titleEl.textContent = hikeData.trails[0].name;
  console.log("Finally got here");

  // search results display
  document.querySelector("#resultRow").style.display = "";
};

locationInputEl.addEventListener("submit", function (event) {
  event.preventDefault();
  resultsBox.innerHTML = "";
  console.log("I submitted " + inputEl.value.trim());
  userCityInput = inputEl.value.trim();
  userStateInput = selectEl.value;

  var stateArray = userStateInput.split(" ");
  // console.log(stateArray[0]);
  // console.log(stateArray[1]);
  userStateCode = stateArray[1];
  userStateInput = stateArray[0];

  aqiWidget.setAttribute(
    "src",
    "https://widget.airnow.gov/aq-dial-widget/?city=" +
      userCityInput +
      "&state=" +
      userStateCode +
      "&country=USA"
  );
  getAirQuality();
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".parallax");
  var instances = M.Parallax.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
  $(".parallax").parallax();
});
