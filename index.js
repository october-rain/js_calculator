function printDisplay(num) {
    let display = document.getElementById('display').innerText = num;
}

function getDisplay() {
    return document.getElementById('display').innerText;
}

function printOutput(num) {
    let output = document.getElementById('input').innerText = num;
}

function getOutput() {
    return document.getElementById('input').innerText
}

let numbers = document.getElementsByClassName('number');
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function () {
        let output = getOutput();
        output += this.innerText;
        printOutput(output);
    });
}

let operations = document.getElementsByClassName('operation');
for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener('click', function () {
        // if (this.id == 'C') {
        //     printDisplay('');
        //     printOutput('');
        // } else if(this.id == 'sqrt') {

        // } 
        switch (this.id) {
            case 'C':
                printDisplay('');
                printOutput('');
                break;
            case 'sqrt':

                break;
            case 'exp':

                break;
            case 'fact':

                break;
            case 'mult':

                break;
            case 'div':

                break;
            case 'sub':

                break;
            case 'toggle':

                break;
            case 'add':

                break;
            case 'close':

                break;
            case 'backspace':

                break;
            case 'pi':

                break;
            case 'equal':

                break;
            case '':

                break;
            default:
                break;
        }
    })
}

// js参考代码
// function getHistory(){
// 	return document.getElementById("history-value").innerText;
// }
// function printHistory(num){
// 	document.getElementById("history-value").innerText=num;
// }
// function getOutput(){
// 	return document.getElementById("output-value").innerText;
// }
// function printOutput(num){
// 	if(num==""){
// 		document.getElementById("output-value").innerText=num;
// 	}
// 	else{
// 		document.getElementById("output-value").innerText=getFormattedNumber(num);
// 	}	
// }
// function getFormattedNumber(num){
// 	if(num=="-"){
// 		return "";
// 	}
// 	var n = Number(num);
// 	var value = n.toLocaleString("en");
// 	return value;
// }
// function reverseNumberFormat(num){
// 	return Number(num.replace(/,/g,''));
// }
// var operator = document.getElementsByClassName("operator");
// for(var i =0;i<operator.length;i++){
// 	operator[i].addEventListener('click',function(){
// 		if(this.id=="clear"){
// 			printHistory("");
// 			printOutput("");
// 		}
// 		else if(this.id=="backspace"){
// 			var output=reverseNumberFormat(getOutput()).toString();
// 			if(output){//if output has a value
// 				output= output.substr(0,output.length-1);
// 				printOutput(output);
// 			}
// 		}
// 		else{
// 			var output=getOutput();
// 			var history=getHistory();
// 			if(output==""&&history!=""){
// 				if(isNaN(history[history.length-1])){
// 					history= history.substr(0,history.length-1);
// 				}
// 			}
// 			if(output!="" || history!=""){
// 				output= output==""?output:reverseNumberFormat(output);
// 				history=history+output;
// 				if(this.id=="="){
// 					var result=eval(history);
// 					printOutput(result);
// 					printHistory("");
// 				}
// 				else{
// 					history=history+this.id;
// 					printHistory(history);
// 					printOutput("");
// 				}
// 			}
// 		}
		
// 	});
// }
// var number = document.getElementsByClassName("number");
// for(var i =0;i<number.length;i++){
// 	number[i].addEventListener('click',function(){
// 		var output=reverseNumberFormat(getOutput());
// 		if(output!=NaN){ //if output is a number
// 			output=output+this.id;
// 			printOutput(output);
// 		}
// 	});
// }