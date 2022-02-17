document.getElementById("calculate-button").addEventListener("click", function(){
const incomeAmount = updateExpences('income-input',10000);
const foodAmount = updateExpences('food-input',2000);
const rentAmount  = updateExpences('rent-input',2500);
const clotheAmount = updateExpences('clothe-input',1000);
// const totalExpenses = updateBalance('total-expenses');
// const balanceTotal = updateBalance('balance-total');
        
//         
        
        //  Expenses Update
// const foodInput = document.getElementById("food-input");
// const foodAmountText = foodInput.value;
// const foodAmount = parseFloat(foodAmountText);
// console.log(foodAmount);

// const rentInput = document.getElementById("rent-input");
// const rentAmountText = rentInput.value;
// const rentAmount = parseFloat(rentAmountText);
// console.log(rentAmount);
 
// const clotheInput = document.getElementById("clothe-input");
// const clotheAmountText = clotheInput.value;
// const clotheAmount = parseFloat(clotheAmountText);

// console.log(totalExpenses);

const total = document.getElementById("total-expenses");
const totalExpenses = foodAmount + rentAmount + clotheAmount;
  total.innerText = totalExpenses;

  const balance = document.getElementById("balance-total");
  const balanceTotal = incomeAmount - totalExpenses;
  balance.innerText = balanceTotal;

 })
function updateExpences(inputId, price){
        const incomeInput = document.getElementById(inputId);
        const incomeAmountText = incomeInput.value;
        const incomeAmount = parseFloat(incomeAmountText);
        return incomeAmount;
}
// function updateBalance(){
//         const total = document.getElementById("total-expenses");
//         const totalExpenses = foodAmount + rentAmount + clotheAmount;
//         total.innerText = totalExpenses;
// }
        //     const incomeInput = document.getElementById('income-input');
//         const incomeAmountText = incomeInput.value;
//         const incomeAmount = parseFloat(incomeAmountText);
//         // console.log(totalExpenses);
        
//         //  Expenses Update
// const foodInput = document.getElementById("food-input");
// const foodAmountText = foodInput.value;
// const foodAmount = parseFloat(foodAmountText);
// // console.log(foodAmount);

// const rentInput = document.getElementById("rent-input");
// const rentAmountText = rentInput.value;
// const rentAmount = parseFloat(rentAmountText);
// // console.log(rentAmount);
 
// const clotheInput = document.getElementById("clothe-input");
// const clotheAmountText = clotheInput.value;
// const clotheAmount = parseFloat(clotheAmountText);

// // console.log(totalExpenses);

// const total = document.getElementById("total-expenses");
// const totalExpenses = foodAmount + rentAmount + clotheAmount;
//   total.innerText = totalExpenses;

//   const balance = document.getElementById("balance-total");
//   const balanceTotal = incomeAmount - totalExpenses;
//   balance.innerText = balanceTotal;
const saveParcent = 20;
  document.getElementById('save-button').addEventListener('click', function(){
         const saveInput = document.getElementById('save-input').value;
       if(saveInput == 20){
               let savings = document.getElementById('savings');
               const savingBalance = parseFloat(savings.innerText);
               const save = (incomeAmount * 20)/100;
               savingBalance = savingBalance - save;
               savings.innerText = savingBalance;
       }
        


       
        
  })
    
    
    
 
