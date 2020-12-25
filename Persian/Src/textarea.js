$(document).ready(function(){
    var text_max = $('textarea').attr('maxlength') ;
    $('#feedBack').html(text_max + ' :تعداد حروف باقی مانده');
    $(".textbox").keyup (function(){
        var text_length = $(".textbox").val().length;

        var remaining = text_max - text_length;

        $('#feedBack').html(remaining + ' :تعداد حروف باقی مانده');
    })
    
});