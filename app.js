let accorbtns = document.querySelectorAll(".accordion-btn");
let upicon = document.querySelector(".up-icon");
let downicon = document.querySelector(".down-icon");




accorbtns.forEach(function(btn){
    btn.addEventListener('click',function(e){
      const accordion = e.currentTarget.parentElement.parentElement.parentElement;
    //   console.log(accordion)
     accordion.classList.toggle('show');
    })
})




//Card on click
let radio = document.querySelectorAll("input");

radio.forEach(function(radiobtn){

 

    radiobtn.addEventListener('click',function(e){

 

        radiobtn = e.currentTarget.classList;
        let radionbtnischecked = e.currentTarget.checked;
        let radiovalue = e.currentTarget.value;
      //   console.log(radiovalue);
       
      //   console.log(radionbtnischecked);
        let capusle = document.querySelector(".capusle01");
        let filter02 = document.querySelector(".filter02");
        let expresso03 = document.querySelector(".expresso03");

        let singleorigin = document.querySelector(".singleorigin01");
        let decaf = document.querySelector(".decaf02");
        let blended = document.querySelector(".blended03");

       

         if(radionbtnischecked == true && radiobtn.contains('capusle')){
            let radioparent = e.currentTarget.parentElement;
            radioparent.classList.add('active');
            filter02.classList.remove('active');
            expresso03.classList.remove('active');
            let grindthem = document.querySelector("#wantusgrindthem");
            grindthem.setAttribute("disabled", "");
            let grindparent = grindthem.parentElement.parentElement;
            grindparent.classList.add('plan-title');
            let firstoption = document.querySelector(".firstoption");
            firstoption.textContent =`${radiovalue}`;
            let hidetxt = document.querySelector(".text-wrapper");
            hidetxt.setAttribute("Style","display:none");




         }

         if(radionbtnischecked == true && radiobtn.contains('filter')){
            // console.log("filter")
            let radioparent = e.currentTarget.parentElement;
            radioparent.classList.add('active');
            capusle.classList.remove('active');
            expresso03.classList.remove('active');
            let grindthem = document.querySelector("#wantusgrindthem");
            grindthem.removeAttribute("disabled");
            let grindparent = grindthem.parentElement.parentElement;
            grindparent.classList.remove('plan-title');
            let hidetxt = document.querySelector(".text-wrapper");
            hidetxt.setAttribute("Style","false");
            let firstoption = document.querySelector(".firstoption");
            firstoption.textContent =`${radiovalue}`;

          
         }
         if(radionbtnischecked == true && radiobtn.contains('expresso')){
            let radioparent = e.currentTarget.parentElement;
            radioparent.classList.add('active');
            capusle.classList.remove('active');
            filter02.classList.remove('active');
            let grindthem = document.querySelector("#wantusgrindthem");
            grindthem.removeAttribute("disabled");
            let grindparent = grindthem.parentElement.parentElement;
            grindparent.classList.remove('plan-title');
            let hidetxt = document.querySelector(".text-wrapper");
            hidetxt.setAttribute("Style","false");
            let firstoption = document.querySelector(".firstoption");
            firstoption.textContent =`${radiovalue}`;
           
         }


         if(radionbtnischecked = true && radiobtn.contains('singleorigin')){
            let radioparent = e.currentTarget.parentElement;
            radioparent.classList.add('active');
            decaf.classList.remove('active');
            blended.classList.remove('active');
            let singleorigin = document.querySelector(".secondoption");
            singleorigin.textContent = `${radiovalue}`;

         }

         if(radionbtnischecked = true && radiobtn.contains('Decaf')){
            let radioparent = e.currentTarget.parentElement;
            radioparent.classList.add('active');
            singleorigin.classList.remove('active');
            blended.classList.remove('active');
            let decaf02 = document.querySelector(".secondoption");
            decaf02.textContent = `${radiovalue}`;
         }

         if(radionbtnischecked = true && radiobtn.contains('Blended')){
            let radioparent = e.currentTarget.parentElement;
            radioparent.classList.add('active')
            singleorigin.classList.remove('active');
            decaf.classList.remove('active');
            let blended03 = document.querySelector(".secondoption");
            blended03.textContent = `${radiovalue}`;
         }


   
     
         else {
            let radioparent = e.currentTarget.parentElement;
            radioparent.classList.add('active');
         }


         // let radioinput = document.querySelectorAll("input");
        
       
           
         
         let optionOne = document.querySelector(".firstoption").textContent;
         let optionTwo = document.querySelector(".secondoption").textContent;
         let optionThree = document.querySelector(".thirdoption").textContent;
         let optionFourth = document.querySelector(".thirdoption").textContent;
         let optionFifth = document.querySelector(".fourthoption").textContent;
         let optionSix = document.querySelector(".sixthoption").textContent;
         
        
         



    })



})









// The interactive subscription page has a number of specific behaviours, which are listed below:

// - If "Capsule" is selected for the first option
//   - The "Want us to grind them?" section should be disabled and not able to be opened
// - Order summary texts updates
//   - If "Capsule" is selected, update the order summary text to:
//     - "I drink my coffee **using** Capsules"
//     - Remove the grind selection text


//   - If "Filter" or "Espresso" are selected, update the order summary text to:
//     - "I drink my coffee **as** Filter||Espresso"
//     - Keep/Add the grind selection text
//   - For all other selections, add the selection title in the blank space where appropriate
// - Updating per shipment price (shown in "How often should we deliver?" section at the bottom) based on weight selected
//   - If 250g weight is selected
//     - Every Week price per shipment is $7.20
//     - Every 2 Weeks price per shipment is $9.60
//     - Every Month price per shipment is $12.00
//   - If 500g weight is selected
//     - Every Week price per shipment is $13.00
//     - Every 2 Weeks price per shipment is $17.50
//     - Every Month price per shipment is $22.00
//   - If 1000g weight is selected
//     - Every Week price per shipment is $22.00
//     - Every 2 Weeks price per shipment is $32.00
//     - Every Month price per shipment is $42.00
// - Calculating per month cost for the Order Summary modal
//   - If Every Week is selected, the Order Summary modal should show the per shipment price multiplied by 4. For example, if 250g weight is selected, the price would be $28.80/month
//   - If Every 2 Weeks is selected, the Order Summary modal should show the per shipment price multiplied by 2. For example, if 250g weight is selected, the price would be $19.20/month
//   - If Every Month is selected, the Order Summary modal should show the per shipment price multiplied by 1. For example, if 250g weight is selected, the price would be $12.00/month
