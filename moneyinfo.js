// function for total income
// function getIncome() {
//   const randomIncome = Math.round(Math.random() * 10000);
//     return randomIncome;

function value(event){
    const costValue = document.getElementById(event);
    const totalValue = parseInt(costValue.value);
    return totalValue;

}

document.getElementById('calculate').addEventListener('click',function(){
    // const income=document.getElementById('income');
    // income.value=getIncome();
    const income=value('income')
    const food=value('food');
    const rent=value('rent');
    const cloth=value('cloth');
    const totalExpense = document.getElementById('total-expense');
    const totalCalculatedExpense=food+rent+cloth;
    totalExpense.innerText=totalCalculatedExpense;
    
    const balanceTotal=document.getElementById('balance');
    const totalBalance=income-totalCalculatedExpense;
    balanceTotal.innerText=totalBalance;


});
document.getElementById('save').addEventListener('click',function(){
    const income2=value('income');
    const saveInput=value('save-input');
    const savingAmount = document.getElementById("saving-amount");
    const saverTax=saveInput/100;
    const totalSavingAmount=income2*saverTax;
    savingAmount.innerText = parseFloat(totalSavingAmount);
    const remainingBalance = document.getElementById("remaining-balance");
    const remainingTotalBalance=income2-totalSavingAmount;
    remainingBalance.innerText = parseFloat(remainingTotalBalance);
});
