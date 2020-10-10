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