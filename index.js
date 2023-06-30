let menuIcon = document.getElementById("menu-icon");
let navBar = document.querySelector(".navbar");
let arrowBack = document.getElementById("arrowback-icon");

menuIcon.addEventListener("click", function(){
    navBar.classList.toggle("active");
});

arrowBack.addEventListener("click", function() {
    navBar.classList.remove("active");
})