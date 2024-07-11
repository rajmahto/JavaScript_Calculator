let string = "";
let memory = 0;  // Variable to store memory value
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'M+') {
            memory += parseFloat(document.querySelector('input').value || '0');
            string = "";  // Clear input after updating memory
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'M-') {
            memory -= parseFloat(document.querySelector('input').value || '0');
            string = "";  // Clear input after updating memory
            document.querySelector('input').value = string;
        } else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});
