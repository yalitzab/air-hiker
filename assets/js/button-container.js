var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var ContainerEl = document.querySelector("#repos-container");
output.innerHTML = slider.value; // Display the default slider value
alert("Okay Tokay")
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

//document.getElementById("button1").addEventListener("click", function() {
//    alert("Hello");
//  });

//var apiUrl="http://api.airvisual.com/v2/city?city=Los%20Angeles&state=California&country=USA&key=9e6807b2-9614-47e1-b226-73369e760983"
// make a request to the url
//fetch(apiUrl)
//.then(function(response) {
  // request was successful
  //if (response.ok) {
      
    //response.json().then(function(data) {
      //displayRepos(data, user);
      //console.log(data);
      //console.log("okay dokie")
    //});
  //} else {
    //alert("Error: " + response.statusText);
  //}
//});


var getAirQuality  = function ()
{

    var apiUrl="http://api.airvisual.com/v2/city?city=Los%20Angeles&state=California&country=USA&key=9e6807b2-9614-47e1-b226-73369e760983"
    // make a request to the url
    fetch(apiUrl)
    .then(function(response) {
      // request was successful
      if (response.ok) {
          
        response.json().then(function(data) {
          displayAirData(data);
          console.log(data);
          //console.log("okay dokie")
        });
      } else {
        alert("Error: " + response.statusText);
      }
    });
    

}

getAirQuality()



var displayAirData = function (airdata) 
{
    // check if api returned any repos
   
if (airdata.length === 0) {
    //repoContainerEl.textContent = "No repositories found.";
    alert("No repositories found")
    return;
  }

  //var repoName = airdata[i].owner.login + "/" + repos[i].name;
  console.log(airdata);
   //console.log(searchTerm);
  // clear old content
  //repoContainerEl.textContent = "";
  //repoSearchTerm.textContent = searchTerm;
  // loop over repos

  var Data1 = "Air Data 1"
  console.log(Data1.concat(Data1, airdata.data.city))
  for (var i = 0; i < airdata.length; i++) {
    // format repo name
    //var airDataName = [i].owner.login + "/" + repos[i].name;
console.log("Air data" + airdata[i])
    // create a container for each repo
    //var repoEl = document.createElement("div");
    //repoEl.classList = "list-item flex-row justify-space-between align-center";

    // create a span element to hold repository name
    //var titleEl = document.createElement("span");
    //titleEl.textContent = repoName;

    // append to container
    //repoEl.appendChild(titleEl);
    // create a status element
    //var statusEl = document.createElement("span");
    //statusEl.classList = "flex-row align-center";

    // check if current repo has issues or not
    //if (repos[i].open_issues_count > 0) {
      //statusEl.innerHTML =
        //"<i class='fas fa-times status-icon icon-danger'></i>" +
        //repos[i].open_issues_count +
        //" issue(s)";
    //} else {
      //statusEl.innerHTML =
        //"<i class='fas fa-check-square status-icon icon-success'></i>";
    //}

    // append to container
    //repoEl.appendChild(statusEl);
    // append container to the dom
    //repoContainerEl.appendChild(repoEl);
  }
};

var getHikeData  = function ()
{
    console.log("Getting here")
    var apiUrl="https://www.hikingproject.com/data/get-trails?lat=34.3917&lon=-118.5426&maxDistance=10&key=200920899-e14060291ce05aae74df93b6c9e5abc8"
    // make a request to the url
    fetch(apiUrl)
    .then(function(response) {
      // request was successful
      if (response.ok) {
          
        response.json().then(function(data) {
          displayHikeData(data);
          console.log(data);
          //console.log("okay dokie")
        });
      } else {
        alert("Error: " + response.statusText);
      }
    });
}
    getHikeData();

    var displayHikeData = function (hikeData) {
        // check if api returned any repos
       
    if (hikeData.length === 0) {
        //repoContainerEl.textContent = "No repositories found.";
        alert("No repositories found")
        return;
      }
    
      //var repoName = airdata[i].owner.login + "/" + repos[i].name;
      console.log(hikeData);
       //console.log(searchTerm);
      // clear old content
      //repoContainerEl.textContent = "";
      //repoSearchTerm.textContent = searchTerm;
      // loop over repos
    
      //var Data1 = "Air Data 1"
      console.log(hikeData.trails[1].name)
      // create a span element to hold repository name
        var titleEl = document.createElement("span");
        titleEl.textContent =hikeData.trails[1].name;
        console.log("Finally got here")
      for (var i = 0; i < hikeData.length; i++) {
        // format repo name
        //var airDataName = [i].owner.login + "/" + repos[i].name;
    //console.log("Air data" + airdata[i])
        // create a container for each repo
        //var repoEl = document.createElement("div");
        //repoEl.classList = "list-item flex-row justify-space-between align-center";
    
        // create a span element to hold repository name
        //var titleEl = document.createElement("span");
        //titleEl.textContent = repoName;
    
        // append to container
        //repoEl.appendChild(titleEl);
        // create a status element
        //var statusEl = document.createElement("span");
        //statusEl.classList = "flex-row align-center";
    
        // check if current repo has issues or not
        //if (repos[i].open_issues_count > 0) {
          //statusEl.innerHTML =
            //"<i class='fas fa-times status-icon icon-danger'></i>" +
            //repos[i].open_issues_count +
            //" issue(s)";
        //} else {
          //statusEl.innerHTML =
            //"<i class='fas fa-check-square status-icon icon-success'></i>";
        //}
    
        // append to container
        //repoEl.appendChild(statusEl);
        // append container to the dom
        //repoContainerEl.appendChild(repoEl);
      }
    };
    

