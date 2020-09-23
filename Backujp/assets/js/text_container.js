$('select').formSelect();
M.updateTextFields();
// $ npm install @ringcentral/sdk --save

// create array to hold mobile phone for saving to local storage
var mobilePhone = []

$(".send-btn").on("click", function(){
  // var searchStates = $(".dropdown-content").val()



var data = "{\"source\":\"Developer\",\"destination\":\"+6512345678\",\"text\":\"Hello World\"}";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

xhr.open("POST", "https://api.wavecell.com/sms/v1/Yalitza_7rR96_hq/single");
xhr.setRequestHeader("authorization", "NYsoqMb5B13OS9AEdzcIDGXV6z1qCQwfshUQg4M2Cg");
xhr.setRequestHeader("content-type", "application/javascript");

xhr.send(data);

  console.log()
})   
