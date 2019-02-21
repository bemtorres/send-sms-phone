
function send(){

var server = document.getElementById('server').value;
var port = document.getElementById('port').value;
var phone = document.getElementById('phone').value;
var message = document.getElementById('message').value;

var url = server + ':' + port +'/v1/sms/send/?phone=' + phone + '&message=' + message;

fetch(url)
  .then(function(response) {    
    return response.text();
  })
  .then(function(result) {
    console.log(result);
    if(result=="OK"){
        console.log("Enviado correctamente");
        snackbarUp();
    }else{
        console.log("Error");
    }
  })
  .catch(error =>{
      console.log(error);
  });

}

function snackbarUp() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


$(function() {
    // Initializes and creates emoji set from sprite sheet
    window.emojiPicker = new EmojiPicker({
      emojiable_selector: '[data-emojiable=true]',
      assetsPath: '../vendors/emoji-picker/img/',
      popupButtonClasses: 'fa fa-smile-o'
    });
    // Finds all elements with `emojiable_selector` and converts them to rich emoji input fields
    // You may want to delay this step if you have dynamically created input fields that appear later in the loading process
    // It can be called as many times as necessary; previously converted input fields will not be converted again
    window.emojiPicker.discover();
  });