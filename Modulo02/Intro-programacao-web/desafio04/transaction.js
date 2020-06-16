/* Create a program to do transactions in a bank account of a user*/

// first: create a object with a name, transactions and balance of a user
const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

// second: create a function to add transactions
function createTransaction(transaction){
  if (transaction.type === 'credit'){
    user.transactions.push(transaction.value)
    user.balance += transaction.value
  } else{
    user.transactions.push(-transaction.value)
    user.balance -= transaction.value
  }
}

// Calculates the higher transaction of a type 
function getHigherTransactionByType(type){
  type === 'credit' ? higherTransaction = Math.max(...user.transactions) :
                        higherTransaction = Math.min(...user.transactions)

  let higherTransactionObject = {
    type: type,
    value: Math.abs(higherTransaction)
  }

  return higherTransactionObject
}

// function that calculates transactions average
function getAverageTransactionValue(){
  let sum = 0

  for (let transaction of user.transactions){
    sum += Math.abs(transaction)
  }

  let average = sum / user.transactions.length

  return average
}


// calculates number of credit and debit transactions
function getTransactionsCount(){
  let numCredit = 0
  let numDebit  = 0

  for (let transaction of user.transactions){
    transaction >= 0 ? numCredit += 1 : numDebit += 1
  }

  let numTransactions = {
    credit: numCredit,
    debit : numDebit
  };
  
  return numTransactions
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user)

console.log(getHigherTransactionByType("credit"));

console.log(getHigherTransactionByType("debit"));

console.log(getAverageTransactionValue());

console.log(getTransactionsCount());