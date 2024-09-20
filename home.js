document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = document.getElementById
        ('in-add-money').value;
    const previousMoney = document.getElementById('previous-balance').innerText;
    const pinNumber = document.getElementById('password-pin').value;
    if (pinNumber === '1234') {

        const addMoneyNumber = parseFloat(addMoney);
        const previousMoneyNumber = parseFloat(previousMoney);

        totalMoney = addMoneyNumber + previousMoneyNumber;
        document.getElementById('previous-balance').innerText = totalMoney;
    } else {
        alert('failed ! try again');
    }
});

// cash out
document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = document.getElementById
        ('cash-out-money').value;
    const previousMoney = document.getElementById('previous-balance').innerText;
    const pinNumber = document.getElementById('password-pin-cash-out').value;
    if (pinNumber === '1234') {

        const addMoneyNumber = parseFloat(addMoney);
        const previousMoneyNumber = parseFloat(previousMoney);

        totalMoney = previousMoneyNumber - addMoneyNumber;
        document.getElementById('previous-balance').innerText = totalMoney;
    } else {
        alert('failed ! try again');
    }
});
// feature added
// cash out feature
document.getElementById('cash-out').addEventListener('click', function () {

    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');

});

// cash in feature
document.getElementById('add-money').addEventListener('click', function () {
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.remove('hidden')
})



