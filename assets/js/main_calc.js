let calcSonuc = document.querySelector('.calc_top h1');
let btns = document.querySelector('.calc_board button:not(.special01, .special02, .special03)');

function handleCalcClick() {
    calcSonuc.innerText += this.innerText; 
}

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', handleCalcClick);
}