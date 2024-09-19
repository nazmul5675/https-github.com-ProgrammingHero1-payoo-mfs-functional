document.getElementById('log-in-btn').addEventListener('click', function (event) {
    event.preventDefault(); //its mean stop auto reload browser form tag default behavior
    console.log('loginbtnclicked');
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
    const passwordPin = document.getElementById('password-pin').value;
    console.log(passwordPin);
})