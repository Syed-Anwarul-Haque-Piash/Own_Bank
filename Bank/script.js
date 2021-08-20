//login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function() {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';

})

//deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function() {
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmount);

    //const currentDeposit = document.getElementById('currentDeposit').innerText;
    //const currentDepositNumber = parseFloat(currentDeposit);
    //const totalDeposit = depositNumber + currentDepositNumber;

    //document.getElementById('currentDeposit').innerText = totalDeposit;


    //for balance
    //const currentBalance = document.getElementById('currentBalance').innerText;
    //const currentBalanceNumber = parseFloat(currentBalance);
    //const totalBalance = depositNumber + currentBalanceNumber;
    //document.getElementById('currentBalance').innerText = totalBalance;

    updateSpanText('currentDeposit', depositNumber);
    updateSpanText('currentBalance', depositNumber);


    document.getElementById('depositAmount').value = '';
})

//withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function() {
    //console.log('withdraw clicked');
    //const withdrawAmount = document.getElementById('withdrawAmount').value;
    //console.log(withdrawAmount);
    //const withdrawNumber = parseFloat(withdrawAmount);
    const withdrawNumber = getInputNumber('withdrawAmount');
    //console.log(withdrawNumber);
    updateSpanText('currentWithdraw', withdrawNumber);
    updateSpanText('currentBalance', -1 * withdrawNumber);
    document.getElementById('withdrawAmount').value = '';

})

function getInputNumber(id) {
    const Amount = document.getElementById(id).value;
    //console.log(withdrawAmount);
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}



function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}