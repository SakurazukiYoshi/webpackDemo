module.exports = function() {
    var click=$("#root").click(function(){
        console.log("hello world")
    });
    return click;
};