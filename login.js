document.getElementById('log-in-btn').addEventListener('click', function (event) {
    event.preventDefault(); //its mean stop auto reload browser form tag default behavior

    const phoneNumber = document.getElementById('phone-number').value;

    const passwordPin = document.getElementById('password-pin').value;

    if (phoneNumber === '01760433111' && passwordPin === '1234') {
        console.log('you are logged in successfully')
        window.location.href = '/home.html'
    } else {
        alert("wrong phone number or PIN");
    }
})