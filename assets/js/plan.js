$( document ).ready(function() {
    accordion()
    ShowAlloption();
});

import plan from "./data.js";




function accordion(){
let accorbtns = document.querySelectorAll(".accordion-btn");

if(accorbtns){
    accorbtns.forEach(function(btn){
        btn.addEventListener('click',function(e){
            //const accordionselectedbtn = e.currentTarget;
          const accordion = e.currentTarget.parentElement.parentElement;
         console.log(accordion)
         accordion.classList.toggle('show-text');
        })
    })
}

}

function sidenav(){

}



function ShowAlloption(){

    showoptions()
}




function showoptions(){
    

    for(let i = 0; i < plan.length; i++){
        console.log(plan[i]);
        let options = plan[i];
    
        if(options.type == 'Preferences'){
            for(let i = 0; i< options.details.length; i++ ){
                console.log(options.details[i].name)
                let cardinfo = options.details[i];
                let preferencecards = document.querySelector('.preference__cards');

                let preferencecardwrapper = document.createElement('div');
                preferencecardwrapper.setAttribute('class','preferencecardwrapper');
                preferencecards.appendChild(preferencecardwrapper);

                let preferencecardwrapperinner = document.querySelector(".preferencecardwrapper");

                let preferencecardoption = document.createElement('div');
                preferencecardoption.setAttribute('id',`card_${cardinfo.id}`);
                preferencecardoption.setAttribute('class','preference__cards__option');
                preferencecardwrapperinner.appendChild(preferencecardoption);
    
                let cardoptionid = document.getElementById(`card_${cardinfo.id}`);
                cardoptionid.innerHTML =`<h4 class="cardinfoname_${cardinfo.id}">${cardinfo.name}</h4>
                                            <p>${cardinfo.description}</p>`;
            }
        }
    
    
    }
}
