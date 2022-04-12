$( document ).ready(function() {
    accordion()
    showoptions();
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


function showoptions(){
    for(let i = 0; i < plan.length; i++){
        console.log(plan[i]);
        let options = plan[i];
    
        if(options.type == "Preferences"){
            for(let i = 0; i< options.details.length; i++ ){
                console.log(options.details[i].name)
                let cardinfo = options.details[i];
                let preferencecards = document.getElementById('preference_options');

                let preferencecardwrapper = document.createElement('div');
                preferencecardwrapper.setAttribute('class','preferenceitem globalcardwrapper');
                preferencecards.appendChild(preferencecardwrapper);

                let preferencecardwrapperinner = document.querySelector(".preferenceitem");

                let preferencecardoption = document.createElement('div');
                preferencecardoption.setAttribute('id',`card_${cardinfo.id}`);
                preferencecardoption.setAttribute('class','global__cards__option');
                preferencecardwrapperinner.appendChild(preferencecardoption);
    
                let cardoptionid = document.getElementById(`card_${cardinfo.id}`);
                cardoptionid.innerHTML =`<h4 class="cardinfoname_${cardinfo.id}">${cardinfo.name}</h4>
                                            <p>${cardinfo.description}</p>`;
            }
        }

        if(options.type == "Bean Type"){
            for(let i = 0; i < options.details.length; i++ ){
                console.log(options.details[i].name);
                let cardinfo = options.details[i];

                let beantypecards = document.getElementById('beantype_options');
                let beantypewrapper = document.createElement('div');
                beantypewrapper.setAttribute('class','beanitem globalcardwrapper');
                beantypecards.appendChild(beantypewrapper);

                let beaniteminner = document.querySelector(".beanitem");

                let beanoption = document.createElement('div');
                beanoption.setAttribute('id',`card_${cardinfo.id}`);
                beanoption.setAttribute('class','global__cards__option');
                beaniteminner.appendChild(beanoption);

                let cardoptionid = document.getElementById(`card_${cardinfo.id}`);
                cardoptionid.innerHTML =`<h4 class="cardinfoname_${cardinfo.id}">${cardinfo.name}</h4>
                                            <p>${cardinfo.description}</p>`;

            }
        }

        if(options.type == "Quantity"){
            for(let i = 0; i < options.details.length; i++ ){
                console.log(options.details[i].name);
                let cardinfo = options.details[i];

                let quantitycards = document.getElementById('quantity_options');
                let quantitywrapper = document.createElement('div');
                quantitywrapper.setAttribute('class','quantityitem globalcardwrapper');
                quantitycards.appendChild(quantitywrapper);

                let quantityiteminner = document.querySelector(".quantityitem");

                let quantityoption = document.createElement('div');
                quantityoption.setAttribute('id',`card_${cardinfo.id}`);
                quantityoption.setAttribute('class','global__cards__option');
                quantityiteminner.appendChild(quantityoption);

                let cardoptionid = document.getElementById(`card_${cardinfo.id}`);
                cardoptionid.innerHTML =`<h4 class="cardinfoname_${cardinfo.id}">${cardinfo.name}</h4>
                                            <p>${cardinfo.description}</p>`;

            }
        }

        if(options.type == "Grind Option"){
            for(let i = 0; i < options.details.length; i++ ){
                console.log(options.details[i].name);
                let cardinfo = options.details[i];

                let grindcards = document.getElementById('grind_options');
                let grindwrapper = document.createElement('div');
                grindwrapper.setAttribute('class','grinditem globalcardwrapper');
                grindcards.appendChild(grindwrapper);

                let grinditeminner = document.querySelector(".grinditem");

                let grindoption = document.createElement('div');
                grindoption.setAttribute('id',`card_${cardinfo.id}`);
                grindoption.setAttribute('class','global__cards__option');
                grinditeminner.appendChild(grindoption);

                let cardoptionid = document.getElementById(`card_${cardinfo.id}`);
                cardoptionid.innerHTML =`<h4 class="cardinfoname_${cardinfo.id}">${cardinfo.name}</h4>
                                            <p>${cardinfo.description}</p>`;

            }
        }

        if(options.type == "Deliveries"){
            for(let i = 0; i < options.details.length; i++ ){
                console.log(options.details[i].name);
                let cardinfo = options.details[i];

                let deliverycards = document.getElementById('delivery_options');
                let deliverywrapper = document.createElement('div');
                deliverywrapper.setAttribute('class','deliveryitem globalcardwrapper');
                deliverycards.appendChild(deliverywrapper);

                let deliveryiteminner = document.querySelector(".deliveryitem");

                let deliveryoption = document.createElement('div');
                deliveryoption.setAttribute('id',`card_${cardinfo.id}`);
                deliveryoption.setAttribute('class','global__cards__option');
                deliveryiteminner.appendChild(deliveryoption);

                let cardoptionid = document.getElementById(`card_${cardinfo.id}`);
                cardoptionid.innerHTML =`<h4 class="cardinfoname_${cardinfo.id}">${cardinfo.name}</h4>
                                            <p>${cardinfo.description}</p>`;
            }
        }

    }
}
