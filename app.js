let accorbtns = document.querySelectorAll(".accordion-btn");
let upicon = document.querySelector(".up-icon");
let downicon = document.querySelector(".down-icon");


accorbtns.forEach(function(btn){
    btn.addEventListener('click',function(e){
      const accordion = e.currentTarget.parentElement.parentElement.parentElement;
      console.log(accordion)
     accordion.classList.toggle('show');
    })
})

// let category = document.getElementById('category');
// category.addEventListener('click', function(e){
//     let active = e.currentTarget;
//     active.classList.toggle("active");
//     let second = document.getElementById('typeofcoffee');
//     second.setAttribute("disabled", "");
   
// })


