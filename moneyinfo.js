// function for total income
// function getIncome() {
//   const randomIncome = Math.round(Math.random() * 10000);
//  
//    return randomIncome;

// function for all input values

function value(event){
    const costValue = document.getElementById(event);
    const totalValue = parseInt(costValue.value);
    const validationMassege=document.getElementById('validation-massege');
    if(totalValue>0 ){
              costValue.value = totalValue;
              validationMassege.style.display = "none";
              return totalValue;
       
    }
    else{
        const emptyfield = "";
      validationMassege.style.display = "block";
      costValue.value=emptyfield;
      return emptyfield;
    }
    

}


// function for calculation of calculator button
document.getElementById('calculate').addEventListener('click',function(){
    // const income=document.getElementById('income');
    // income.value=getIncome();
    const income=value('income')
    const food=value('food');
    const rent=value('rent');
    const cloth=value('cloth');
    const totalExpense = document.getElementById('total-expense');
    const totalCalculatedExpense = parseInt(food + rent + cloth);
    totalExpense.innerText = totalCalculatedExpense;
    
    // calculating total expenses
    const balanceTotal=document.getElementById('balance');
    const totalBalance=income-totalCalculatedExpense;
   
    if(totalBalance>=0){
        balanceTotal.innerText = totalBalance;
       
    }
    else{
         const validation = document.getElementById("balance-validation");
        validation.style.display='block';

    
    }


});
// function for save button
document.getElementById('save').addEventListener('click',function(){
    const income2=value('income');
    const saveInput=value('save-input');

    // calculating saving amount
    const savingAmount = document.getElementById("saving-amount");
    const saverTax=saveInput/100;
    const totalSavingAmount=income2*saverTax;
    savingAmount.innerText = parseFloat(totalSavingAmount);

    // calculating remaining balance
    const remainingBalance = document.getElementById("remaining-balance");
    const balanceTotal = document.getElementById("balance");
    const balancesubTotal=parseInt(balanceTotal.innerText);
    const remainingTotalBalance=balancesubTotal-totalSavingAmount;

    if(remainingTotalBalance>=0){
         remainingBalance.innerText = parseFloat(remainingTotalBalance);
    }
    else{
        const emptybalance='00';
        remainingBalance.innerText=emptybalance;

    }
});
