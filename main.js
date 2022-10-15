///////GLOBAL VARIABLES/////////////
let currentAnswer = undefined;
//by default, before a second number is typed by user, the "current answer" will be undefined.
//the job of currentAnswer is to be taken in recursively by the math operations.
let currentNumber = undefined;
//this number will be updated every time an operation button is pressed. 




//////OPERATION FUNCTIONS//////////////////
function add(addend1, addend2){
    let num1 = addend1
    let num2
    //sets default value if no running total yet exists
    if (addend2 == undefined){
        num2 = 0;
    } else{
        num2 = addend2;
    }
    let sum = num1 + num2;
    currentAnswer = sum; //updates current answer so future operate() calls can use the running total
    return sum;
    
}

function subtract(minuend, subtrahend) {
    //subtracts the first arg by the second arg
    let num1 = minuend;
    let num2;
    if (subtrahend == undefined){
      num2 = 0;
    } else{
      num2 = subtrahend;
    }
    let dif = (num1 - num2);
    currentAnswer = dif;  //updates current answer so future operate() calls can use the running total
      return dif;
    
  };
  
  
  
  function multiply(multiplicand, multiplier){
    //multiplies first arg by second arg
    let num1= multiplicand;
    //if statement makes sure it does not return error if no second number as been entered by the user. 
    let num2
    if (multiplier == undefined){
      num2 = 1;
    } else{
      num2 = multiplier;
    }
    
    let product = (num1 * num2);
    currentAnswer = product;  //updates current answer so future operate() calls can use the running total
    return product;
  }
  
  
  
function divide (dividend, divisor){
    let dend;
    let visor;
    dend = dividend;

    //seperate if-statement to make sure it is not 0. 0 is not the default value of currentAnswer for a reason. 
    if (divisor == 0) return "ERROR: NO / BY 0";
    //if statement makes sure it does not return error if no second number as been entered by the user. 
    if (divisor == undefined){
      visor = 1;
    } else{
      visor = divisor;
    }
    let quotient = (dend / visor);
    currentAnswer = quotient;  //updates current answer so future operate() calls can use the running total
    return quotient;
  }
  




function operate (num1, num2, arg3){
    return(arg3(num1, num2));
    //use this to call whatever function you want against the total so far and the most recent user typed number
    //even if currentAnswer is undefined, the functions will have an if-block to expect that
}




////FUNCTIONS USED TO UPDATE DISPLAY///////////
function displayThisThing (string){
  //replaces the whole readout with whatever the passed in string is
  let display = document.querySelector("#display");
  display.style.color = "red";
  display.innerText = string;
}

function addToDisplay (string){
  //adds the passed in string to the end of the display readout
  let display = document.querySelector("#display");
  //get the current string that is displayed with .innerText
  let currentDisplay = display.innerText;
  display.style.color = "red";
  //add the new string to the old string
  display.innerText = currentDisplay + "" + string;

}

function clearDisplay(){
  //replace existing text with a blank string
  let display = document.querySelector("#display");
  let currentDisplay = display.innerText = "";
}

function clearAll(){
  clearDisplay();
  currentNumber = undefined;

}



//////////////
////////////////
/////////////////// experimental code
//switch block gets id from button click and runs function based on id
const onClick = function() {
switch (this.id){
  case "seven":
    alert("you pressed 7");
    appendCurrentNumber(7);
    addToDisplay("7");
    
    break;
    
  case "eight":
    alert("you pressed 8");
    appendCurrentNumber(8);
    addToDisplay("8");
    
    break;
    
  case "nine":
    alert("you pressed 9");
    appendCurrentNumber(9);
    addToDisplay("9");
    
    break;
    
  case "clear":
    alert("clear button pressed");
    clearAll();
    break;
  
  case "test-button-2":
    alert("switch 2 worked");
    break;
    
  case "test-button-3":
    alert("switch 3 worked");
    break;
  default:
    alert("you messed up");
   
}
}
///////All buttons mapped by id to run an onClick function////////
document.getElementById('seven').onclick = onClick;
document.getElementById('eight').onclick = onClick;
document.getElementById('nine').onclick = onClick;  
document.getElementById('clear').onclick = onClick;
document.getElementById('test-button-2').onclick = onClick;
document.getElementById('test-button-3').onclick = onClick;




// operate(1, currentAnswer, add);
//   addToDisplay(currentAnswer);
//   if (this.id == "test-button-1"){
//     alert("it worked 1")
//   } else if(this.id == "test-button-2"){
//     alert("it worked 2")
//   } else{
//     alert("it did not work :(")
//   }
  // alert(this.id, this.innerHTML);






//test in display
clearDisplay()
addToDisplay(operate(1, currentAnswer, add))
addToDisplay(operate(1, currentAnswer, add))
addToDisplay(operate(1, currentAnswer, add))


function appendCurrentNumber(num){
//append the number the user typed onto an empty or int global variable
alert(`currentNumber is currently ${currentNumber}`)
if (currentNumber == undefined){
  currentNumber = num;
  alert(`was undefined but now is ${currentNumber}`)
} else if (Number.isInteger(currentNumber)){
  let tempString = num.toString();
  //must be made into a string temporarily to append num to the end.
  currentNumber = parseInt(currentNumber) + tempString;
  currentNumber = parseInt(currentNumber)
  //converted back to number in the global var
  alert(`you added ${tempString} to currentNumber and now currentNumber is ${currentNumber} `)
} else{
  alert("ERROR: check currentNumber")
}
}