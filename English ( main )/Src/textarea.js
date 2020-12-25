$(document).ready(function(){
    var text_max = $('textarea').attr('maxlength') ;
    $('#feedBack').html(text_max + ' characters remaining');
    $(".textbox").keyup (function(){
        var text_length = $(".textbox").val().length;

        var remaining = text_max - text_length;

        $('#feedBack').html(remaining + ' characters remaining');
    })
    
});