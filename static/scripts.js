function mainSize(){
    if(window.screen.width < 1320){
        var element = document.getElementById("topPicture");
        var element2 = document.getElementById("topSection");
        element.style.left = "-300px";
        element.style.width = "130.5%"
        element2.style.height = "46.5vw"
    }
}
window.onscroll = function() {myFunction()};
function myFunction() {
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}