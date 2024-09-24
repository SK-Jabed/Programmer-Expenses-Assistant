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


    // History
    const historyItem = document.createElement("div");
    historyItem.className = 
    "bg-white p-3 rounded-md shadow-sm border-l-2 border-indigo-500";

    historyItem.innerHTML = `
        <p class="text-xs text-gray-500 font-bold">${new Date().toLocaleDateString()}</p>
        <p class="text-xs text-gray-500 font-bold">Income: ${income.toFixed(2)}</p>
        <p class="text-xs text-gray-500 font-bold">Expenses: ${totalExpenses.toFixed(2)}</p>
        <p class="text-xs text-gray-500 font-bold">Balance: ${balance.toFixed(2)}</p>
    `;

    const historyList = document.getElementById("history-list");
    historyList.insertBefore(historyItem, historyList.firstChild);
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


// History Tab Functionality
const historyTab = document.getElementById("history-tab");
const assistantTab = document.getElementById("assistant-tab");
historyTab.addEventListener("click", function() {
    historyTab.classList.add(
        "text-white",
        "bg-gradient-to-r", 
        "from-blue-500",
        "to-purple-600"
    );
    assistantTab.classList.add("text-gray-600");

    historyTab.classList.remove("text-gray-600");
    assistantTab.classList.remove(
        "text-white",
        "bg-gradient-to-r", 
        "from-blue-500",
        "to-purple-600"
    );
    
    document.getElementById("expense-form").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");
});


// Assistant Tab Functionality
assistantTab.addEventListener("click", function() {
    assistantTab.classList.add(
        "text-white",
        "bg-gradient-to-r", 
        "from-blue-500",
        "to-purple-600"
    );
    historyTab.classList.remove(
        "text-white",
        "bg-gradient-to-r", 
        "from-blue-500",
        "to-purple-600"
    );

    document.getElementById("expense-form").classList.remove("hidden");
    document.getElementById("history-section").classList.add("hidden");
});