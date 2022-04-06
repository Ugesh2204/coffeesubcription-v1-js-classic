

import plan from "./data.js";




function accordion(){
    let accorbtns = document.querySelectorAll(".accordion-btn");
// let upicon = document.querySelector(".up-icon");
// let downicon = document.querySelector(".down-icon");

if(accorbtns){
    accorbtns.forEach(function(btn){
        btn.addEventListener('click',function(e){
          const accordion = e.currentTarget.parentElement.parentElement.parentElement;
        //   console.log(accordion)
         accordion.classList.toggle('show');
        })
    })
    
}

}

let Preferencescontainer = document.querySelector('.preferencescontainer');

for(let i = 0; i < plan.length; i++){
    console.log(plan[i]);
    let options = plan[i];

    if(options.type == 'Preferences'){
        for(let i = 0; i< options.details.length; i++ ){
            console.log(options.details[i].name)
            let cardinfo = options.details[i];
            let preferencecards = document.querySelector('.preference__cards');
            let preferencecardoption = document.createElement('div');
            preferencecardoption.setAttribute('id',`card_${cardinfo.id}`);
            preferencecardoption.setAttribute('class','preference__cards__option');
            preferencecards.appendChild(preferencecardoption);

            let cardoptionid = document.getElementById(`card_${cardinfo.id}`);
            cardoptionid.innerHTML =`<h4>${cardinfo.name}</h4>
                                        <p>${cardinfo.description}</p>`;
        }
    }


}