document.getElementById("calculate-button").addEventListener("click", function(){
    const incomeInput = document.getElementById('income-input');
        const incomeAmountText = incomeInput.value;
        const incomeAmount = parseFloat(incomeAmountText);
        
        // console.log(totalExpenses);
        
      



        //  Expenses Update
const foodInput = document.getElementById("food-input");
const foodAmountText = foodInput.value;
const foodAmount = parseFloat(foodAmountText);
// console.log(foodAmount);

const rentInput = document.getElementById("rent-input");
const rentAmountText = rentInput.value;
const rentAmount = parseFloat(rentAmountText);
// console.log(rentAmount);
 
const clotheInput = document.getElementById("clothe-input");
const clotheAmountText = clotheInput.value;
const clotheAmount = parseFloat(clotheAmountText);
const totalExpenses = foodAmount + rentAmount + clotheAmount;
// console.log(totalExpenses);

const total = document.getElementById("total-expenses");
  total.innerText = totalExpenses;

  const balance = document.getElementById("balance-total");
  const balanceTotal = incomeAmount - totalExpenses;
  balance.innerText = balanceTotal;
 })
// //  Expenses Update
// const foodInput = document.getElementById("food-input");
// const foodAmountText = foodInput.value;
// const foodAmount = parseFloat(foodAmountText);
// console.log(foodAmount);
 
