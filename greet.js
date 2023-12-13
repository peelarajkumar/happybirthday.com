$("document").ready(function(){

    $("#buttonfade").click(fade);
function fade(){
    $(".sdimg").fadeToggle(1000);
    $(".song")[0].play();

}})
