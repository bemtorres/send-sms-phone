
//Version 0.2

// fetch send
function send(){

var server = document.getElementById('server').value;
var port = document.getElementById('port').value;
var phone = document.getElementById('phone').value;
var message = document.getElementById('message').value;

var url = server + ':' + port +'/v1/sms/send/?phone=' + phone + '&message=' + message;

fetch(url)
  .then(resp => {    
    return resp.text();
  })
  .then(result => {
    console.log(result);
    if(result=="OK"){
      console.log("Enviado correctamente");
        snackbarUp('Message Ok..');
    }
    if(result=="500"){
      console.log("Error en parametros");
      snackbarUp('Error 500');
    }
  })
  .catch(error =>{
    console.log("fail :" + error.message);
    snackbarUp('Fail, wrong data');
  });
}

// Snackbar
function snackbarUp(message) {
    var x = document.getElementById("snackbar");
    x.innerHTML = message;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


// Emoji
$(function() {
    // Initializes and creates emoji set from sprite sheet
    window.emojiPicker = new EmojiPicker({
      emojiable_selector: '[data-emojiable=true]',
      assetsPath: 'vendors/emoji-picker/img/',
      popupButtonClasses: 'fa fa-smile-o'
    });
    // Finds all elements with `emojiable_selector` and converts them to rich emoji input fields
    // You may want to delay this step if you have dynamically created input fields that appear later in the loading process
    // It can be called as many times as necessary; previously converted input fields will not be converted again
    window.emojiPicker.discover();
  });