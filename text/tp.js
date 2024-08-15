const text= document.getElementById("header")
const button= document.getElementById("submit")
const input= document.getElementById("input1")
const ageInput= document.getElementById("input2")
const cardText= document.getElementById("cardText")

button.addEventListener('click', function(){
    update();
})

input.addEventListener('keyup', function(event){
    if(event.key =='Enter')
    {
        update();
    }
})

ageInput.addEventListener('keyup', function(event){
    if(event.key =='Enter')
    {
        update();
    }
})

function update() {
    let val = input.value.trim();
    let valAge = ageInput.value.trim();

    function setCardText(message) {
        cardText.innerHTML = message;
    }

    if (input.value !== "" && ageInput.value !== "") {
        if (input.value !== "" && !isValidname(val)) {
            setCardText("Enter a valid name");
            return;
        }

        if (ageInput.value !== "" && !isValage(valAge)) {
            setCardText("Enter a valid age");
            return;
        }

        if (input.value !== "") {
            console.log(`name: ${input.value}`);
            setCardText(`thank u! ${input.value}`);
            input.value = "";
        }

        if (ageInput.value !== "") {
            console.log(`age: ${ageInput.value}`);
            ageInput.value = "";
        }

        button.style.transition = "background-color 0.4s ease-in";
        button.style.backgroundColor = "lightgreen";
        setTimeout(() => {
            button.style.backgroundColor = "";
        }, 1400);
    } else {
        if (input.value === "") {
            input.style.borderColor = "red";
            input.style.animation = "blink 0.5s infinite";
            setTimeout(function () {
                input.style.transition = "border-color 0.4s ease";
                input.style.borderColor = "";
                input.style.animation = "";
            }, 2000);

            let style = document.createElement("style");
            style.innerHTML = `
                @keyframes blink {
                    0% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                    100% {
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        if (ageInput.value === "") {
            ageInput.style.borderColor = "red";
            ageInput.style.animation = "blink 0.5s infinite";
            setTimeout(function () {
                ageInput.style.transition = "border-color 0.4s ease";
                ageInput.style.borderColor = "";
                ageInput.style.animation = "";
            }, 2000);

            let style = document.createElement("style");
            style.innerHTML = `
                @keyframes blink {
                    0% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                    100% {
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        setCardText("Enter both values");
    }
}

// function update(){
//     let val=input.value.trim()
//     let valAge=ageInput.value.trim()

//    function setCardText(message) {
//        cardText.innerHTML = message;
//    }
   
//    if (input.value !== "" && ageInput.value !== "") {
//     if(input.value !== ""){
//        if (isValidname(val) && isValage(valAge)) {
//            console.log(`name: ${input.value}`);
//            setCardText(`thank u! ${input.value}`);
//            input.value = "";
//        } 
//        else 
//        {
//            setCardText("Enter valid details");
//            return;
//        }
//     }
    
//     if(ageInput.value !== ""){
//         if (isValage(valAge)) {
//             console.log(`age: ${ageInput.value}`);
//             ageInput.value = "";
//         } 
//         else 
//         {
//             setCardText("Enter a valid age");
//             return;
//         }
//     }

//        button.style.transition = "background-color 0.4s ease-in";
//        button.style.backgroundColor = "lightgreen";
//        setTimeout(() => {
//            button.style.backgroundColor = "";
//        }, 1400);
//    }
//     else if(input.value=="" || ageInput.value=="")
//     {   
//         if (input.value == "") {
//             input.style.borderColor = "red";
//             input.style.animation="blink 0.5s infinite";
//             setTimeout(function(){
//                 input.style.transition="border-color 0.4s ease ";
//                 input.style.animation="";
//                 input.style.borderColor="";
//             },2000)
            

//             let style1=document.createElement("style")
//             style1.innerHTML=`
//                 @keyframes blink {
//                     0%{
//                         opacity: 1;
//                     }
//                     50%{
//                         opacity: 0.5;
//                     }
//                     100%{
//                         opacity: 1;
//                     }
//                 }
//             `
//             document.head.appendChild(style1);
//         }
        
//         if (ageInput.value == "") {
//             ageInput.style.borderColor = "red";
//             ageInput.style.animation = "blink 0.5s infinite";
//             setTimeout(function(){
//                 ageInput.style.transition = "border-color 0.4s ease";
//                 ageInput.style.borderColor = "";
//                 ageInput.style.animation="";
//             }, 2000);
            
//             let style = document.createElement('style');
//             style.innerHTML = `
//                 @keyframes blink {
//                     0% {
//                         opacity: 1;
//                     }
//                     50% {
//                         opacity: 0.5;
//                     }
//                     100% {
//                         opacity: 1;
//                     }
//                 }
//             `;
//             document.head.appendChild(style);
//         }
//         cardText.innerHTML="Enter both values";
//     }
// }

function isValidname(val){
    const reg= /^[a-zA-Z]+$/
    return reg.test(val)
}

function isValage(val){
    const regex=/^[0-9]+$/
    return regex.test(val);
}





