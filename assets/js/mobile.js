let navmobinbtn = document.getElementById("nav-mobile");
let mainnav = document.querySelector(".navbar");

navmobinbtn.addEventListener('click', function(){
    mainnav.classList.toggle("active");
})

