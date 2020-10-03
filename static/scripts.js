window.onscroll = function() {headerMove()};
function onLoad(){
  showDivs(1);
  sideMenu();
 
  carousel();
}

function headerMove() {
    var header = document.getElementById("Header");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

var slideIndex = 4;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function selectDivs(n){
    slideIndex = n;
    showDivs(slideIndex);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var y = document.getElementsByClassName("badge")
  if (n > x.length){slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";
 
  for (i = 0; i < y.length; i++) {
    y[i].classList.remove("yellow");  
    y[i].classList.add("hoverYellow");  
  }
  y[slideIndex-1].classList.add("yellow");
}

var coll = document.getElementsByClassName("collapsibleButton");

function expand(num){
  coll[num].classList.toggle("active");
  var content = coll[num].nextElementSibling;

  for (i = 0; i < coll.length; i++){
    if( i != num){close(i)}
  }
  
  if (content.style.maxHeight){
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  } 
  
  
}

function close(num){
  coll[num].classList.toggle("active");
  var content = coll[num].nextElementSibling;

  if (content.style.maxHeight){
    content.style.maxHeight = null;
  }
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function sideMenu(){
  
  if(window.innerWidth < 1202){
    document.getElementById("navBar").style.display = "none";
    document.getElementById("sideNav").style.display = "inline-block";
  }else{
    document.getElementById("navBar").style.display = "inline-block";
    document.getElementById("sideNav").style.display = "none";
  }
}

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  plusDivs(1)
  setTimeout(carousel, 4000);// Change image every 2 seconds
}