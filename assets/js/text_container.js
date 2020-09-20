// create array to hold mobile phone for saving to local storage
var mobilePhone = []

$(".send-btn").on("click", function(){
 
  var searchStates = $(".dropdown-content").val()
  console.log()
  airQ(searchStates)
})




function airQ(searchStates) {
  fetch("http://api.airvisual.com/v2/states?q=" + searchStates + "country=USA&key=92595417-3c50-41fb-9446-57d4c55dc678")
  .then(function(response){
    return response.json();
  })
  .then (function() {
    console.log(searchStates)

  

  })
}





//   $(document).ready(function(state){
//       $('#states').state();
//     });

// var instance = M.Dropdown.getInstance(elem);
// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.dropdown-trigger');
//   var instances = M.Dropdown.init(elems, options);

//   console.log(Dropdown)
// });


$('select').formSelect();
M.updateTextFields();
    // //drop down list states jquery
    