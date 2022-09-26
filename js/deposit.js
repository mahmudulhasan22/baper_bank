document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmmount = getInputFieldvalueById('deposit-field');
    const prevDepositTotal = getTextElementValueById('deposit-total');

    const newDepositTotal = prevDepositTotal + newDepositAmmount ;
    setTextElementValueByID('deposit-total' , newDepositTotal);

    const prevBalanceTotal = getTextElementValueById('main-balance');
    const newBalanceTotal = prevBalanceTotal + newDepositAmmount ;
    setTextElementValueByID('main-balance' , newBalanceTotal);
})

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmmount = getInputFieldvalueById('withdraw-field');
    const prevWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = prevWithdrawTotal + newWithdrawAmmount;
    setTextElementValueByID('withdraw-total', newWithdrawTotal);

    const prevBalanceTotal = getTextElementValueById('main-balance');
    const newBalanceTotal = prevBalanceTotal - newWithdrawAmmount  ;
    setTextElementValueByID('main-balance' , newBalanceTotal );
})