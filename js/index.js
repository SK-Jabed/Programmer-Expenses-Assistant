// Getting All The Values



// Add Event Listener for Calculate Button
const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", function() {  
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);

    const totalExpenses = software + courses + internet;;
    const balance = income - totalExpenses;

    const totalExpensesElement = document.getElementById("total-expenses");
    totalExpensesElement.innerText = totalExpenses.toFixed(2);

    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = balance.toFixed(2);

    const result = document.getElementById("results");
    result.classList.remove("hidden");
});


// Add Event Listener for Calculate Savings Button
const calculateSavingsButton = document.getElementById("calculate-savings");
calculateSavingsButton.addEventListener("click", function() {
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);

    const savingsPercentage = parseFloat(document.getElementById("savings").value);
    console.log(savingsPercentage);

    const totalExpenses = software + courses + internet;;
    const balance = income - totalExpenses;

    const savingsAmount = (savingsPercentage * balance) / 100;
    const remainingBalance = balance - savingsAmount;

    const savingsAmountElement = document.getElementById("savings-amount");
    savingsAmountElement.innerText = savingsAmount.toFixed(2);

    const remainingBalanceElement = document.getElementById("remaining-balance");
    remainingBalanceElement.innerText = remainingBalance.toFixed(2);
});