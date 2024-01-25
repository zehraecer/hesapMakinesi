const display = document.querySelector(".calculator-input")
const keys = document.querySelector(".calculator-keys")

let displayValue="0";
let firsValue= null;
let operator = null;
let waitingForSecondValue= false;


    function updateDisplay(){
            display.value = displayValue;

    }

    keys.addEventListener("click", function(e){
            const element= e.target;                                                

       if(!element.matches("button")) return;                                                  


       if(element.classList.contains("operator")){                               
            // console.log("operator",element.value);
            handleOpertaor(element.value);
            updateDisplay();
            return;
        }  

        if(element.classList.contains("decimal")){                                                  
            //console.log("decimal",element.value);
            inputDecimal();
            updateDisplay();
            return;
        }  

        if(element.classList.contains("clear")){                                                 
            // console.log("clear",element.value);
            clear();
            updateDisplay();
            return;
        }  
        if(element.classList.contains("clearBtn")){                                                 
            // console.log("clear",element.value);
            clearBtn();
            updateDisplay();
            return;
        }  


        inputNumber(element.value);                                                            
        updateDisplay();

    });

    function handleOpertaor(nextOperator){
     const value = parseFloat(displayValue);

    if(operator && waitingForSecondValue){
        operator = nextOperator;
        return;
    }

     if(firsValue=== null){
        firsValue=value;
     }else if(operator){
        const result = calculate(firsValue,value,operator);
         
        displayValue=`${parseFloat(result.toFixed(10))}`;
        firsValue = result;
     }

     waitingForSecondValue=true;
     operator=nextOperator;

     console.log(displayValue,firsValue,operator,waitingForSecondValue);


    }

    function calculate(first, second, operator){
        if(operator === "+"){
            return first + second;
        }else if(operator ==="-"){
            return first - second;
        }else if(operator ==="*"){
            return first * second;
        }else if(operator ==="/"){
            return first / second;
        }
        return second;
    }

    function inputNumber(num){
        if(waitingForSecondValue){
            displayValue=num;
            waitingForSecondValue=false;
        }else{
            displayValue= displayValue === "0"? num: displayValue + num                                   
        }
        console.log(displayValue,firsValue,operator,waitingForSecondValue);
    }

    function inputDecimal(){
         if(!displayValue.includes(".")){                                                             
                displayValue += "."
         }
    }

    function clear(){
            displayValue="0"
    }
    
    function clearBtn(){
         displayValue= displayValue.slice(0,-1)
    }
updateDisplay();

const numberBar = document.querySelector("#myRange");
const body= document.querySelector("body");

numberBar.addEventListener("click", function(){
    if(numberBar.value== "1"){
        body.classList.remove("ikinci")
        body.classList.remove("ucuncu")
    }
    if(numberBar.value == "2"){
        if(body.classList.contains("ucuncu")){
            body.classList.remove("ucuncu")
         }
        body.classList.add("ikinci")
    }
    if(numberBar.value== "3"){
       if(body.classList.contains("ikinci")){
          body.classList.remove("ikinci")
       }
        body.classList.add("ucuncu")
    }
})
