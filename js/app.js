document.getElementById("calculate-button").addEventListener("click", function(){
const incomeAmount = updateExpences('income-input',10000);
const foodAmount = updateExpences('food-input',2000);
const rentAmount  = updateExpences('rent-input',2500);
const clotheAmount = updateExpences('clothe-input',1000);


const total = document.getElementById("total-expenses");
const totalExpenses = foodAmount + rentAmount + clotheAmount;
  total.innerText = totalExpenses;

  const balance = document.getElementById("balance-total");
  const balanceTotal = incomeAmount - totalExpenses;
  balance.innerText = balanceTotal;

 })
function updateExpences(inputId,){
        const incomeInput = document.getElementById(inputId);
        const incomeAmountText = incomeInput.value;
        const incomeAmount = parseFloat(incomeAmountText);
        return incomeAmount;
}















const savingsParcent = 0;
  document.getElementById('save-button').addEventListener('click', function(){
         const save = document.getElementById('savings-amount');
       if(save == savingsParcent) {
               const savingsAmount = document.getElementById('savings-amount');
               let savings = parseFloat(savingsAmount.innerText);
               const savingsGetParcent = (incomeAmount * 20) / 100;
               savings = savings - savingsGetParcent;
               savingsAmount.innerText = savings;
       }
        else {
                console.log('efjhgj')
        }


       
        
  })
    
    
    
 
