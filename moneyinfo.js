// function for total income
function getIncome() {
  const randomIncome = Math.round(Math.random() * 10000);
    return randomIncome;
}
function value(event){
    const costValue = document.getElementById(event);
    const totalValue = parseInt(costValue.value);
    return totalValue;

}

document.getElementById('calculate').addEventListener('click',function(){
    const income=document.getElementById('income');
    income.value=getIncome();
    const food=value('food');
    const rent=value('rent');
    const cloth=value('cloth');
    const income = document.getElementById(");


});
