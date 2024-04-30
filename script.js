const amount = document.getElementById('amount');
const guests = document.getElementById('guests');
const quality = document.getElementById('quality');
const tipAmount = document.getElementById('tip-amount');

calculate = () => {
    const tip = ((parseFloat(amount.value) * parseFloat(quality.value)) / parseFloat(guests.value)).toFixed(2);

    amount.value = '';
    guests.value = '';
    quality.value = '';

    if (isNaN(tip)) {
        tipAmount.innerHTML = 'Não há gorjeta';
        showTipAmount(); 
    }
    else {
        tipAmount.innerHTML = 'Gorjeta de R$' + tip + ' para cada pessoa';
        showTipAmount();
    }
}

showTipAmount = () => {
    var x = tipAmount;
    x.className = 'show';
    setTimeout(function(){x.className = x.className.replace('show', '');}, 3000);
}
