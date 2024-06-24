// Responsive js for menu dipak

const mainMenu = document.querySelector(".mainmenu");
        const closeMenu = document.querySelector(".close");
        const openMenu = document.querySelector(".open-menu");



        openMenu.addEventListener("click",show);
        closeMenu.addEventListener("click",close);

        function show(){
            mainMenu.style.display="flex";
            mainMenu.style.top="0";
        }

        function close(){
            mainMenu.style.top="-100%"
        }

        // pre loader  //
  var loader = document.getElementById('pre_loader');
  function myfunction()
  {
  loader.style.display = 'none';
  }

//   Js for about section by rupam
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("Slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 3 seconds
}

//slide show for f design 2
var myIndex1 = 0;
carousel1();

function carousel1() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex1++;
  if (myIndex1 > x.length) {
    myIndex1 = 1;
  }
  x[myIndex1 - 1].style.display = "block";
  setTimeout(carousel1, 3000); // Change image every 3 seconds
}

// pre loader  //
var loader = document.getElementById("pre_loader");
function myfunction() {
  loader.style.display = "none";
}
