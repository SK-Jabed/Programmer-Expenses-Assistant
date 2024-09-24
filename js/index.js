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

    const savingsElement = document.getElementById("savings-amount");
    savingsElement.innerText = savings-amount;

});