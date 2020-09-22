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

$('select').formSelect();
M.updateTextFields();
   
function smsText(){
  fetch("	https://platform.devtest.ringcentral.com")
}   

// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
const accountId = '<ENTER VALUE>';
const extensionId = '<ENTER VALUE>';

// POST BODY
const body = {
    from: {
        phoneNumber: '<ENTER VALUE>'
    },
    to: [
        {
            phoneNumber: '<ENTER VALUE>'
        },
    ],
    text: '<ENTER VALUE>'
};

const SDK = require('ringcentral');
const rcsdk = new SDK({server: process.env.serverURL, appKey: process.env.clientId, appSecret: process.env.clientSecret});
const platform = rcsdk.platform();
platform.login({ username: process.env.username, extension: process.env.extension, password: process.env.password }).then(() => {
    platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/sms`, body).then((r) => {
        // PROCESS RESPONSE
    });
});
