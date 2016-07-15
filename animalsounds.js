//test with $.getJSON('https://intelnow.herokuapp.com/?animal=dog', function(){}) in console
//responseText: "{"sound":"woof"}"

var getSound = function() {
    $('#urlInput').keypress(function(e) {
        if (e.keyCode == 13) {

            var animal = $('#urlInput').val();

            if (animal === "") {
                $('#response').html('<p>Please enter the name of an animal</p>');
                return;
            } else {
              getData(animal);
            }
        }
    });
};

var getData = function (a) {
    // var url = 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD';
    // var url = 'https://intelnow.herokuapp.com/?animal=dog'; //{"sound":"woof"}
    // $.getJSON(url, function(result) {
    //     var sound = getSound(result);
    //     });
    // });

    // var msg = $.ajax({type: "GET", url: 'https://intelnow.herokuapp.com/?animal=dog', async: false}).responseText;
    // console.log(msg);

    var msg;
    // $.get('https://intelnow.herokuapp.com/?animal=dog', function(text) {
    $.get('https://intelnow.herokuapp.com/?animal=' + a , function(text) {
      msg = text;
      console.log(msg['sound']); //woof
      var sound = msg['sound'];
      displaySound(sound);
    });
}

var displaySound = function(s){
     $('#urlInput').focus().val('');
     $('#response').html(s);
};

$(document).ready(function(){
     getSound();
});

