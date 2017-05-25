module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = "hello world12313";
    $(".top").mousemove(function(){
        $(this).css("background-color","blue");
        $(".bottom").html("hello world");
    }).mouseleave(function(){
        $(this).css("background-color","pink");
        $(".bottom").html("");
    });
    //greet.textContent = config.text;
    return greet;
};

