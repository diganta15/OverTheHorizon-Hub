$(document).ready(function(){
    var show = $('.showcase');
    $.getJSON('links.json',function(data){
        $.each(data, function(i ,val){
            $('.container').append('<h2>'+val.topic+'</h3>');
            $('.container').append('<h4>' + val.body.gamename + '</h4>');
        })
    })
})