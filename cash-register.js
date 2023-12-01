// Create an object with key value pairs detailing the various currency denominations.
const currencyUnit = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
}

// Start of cash register function
function checkCashRegister(price, cash, cid) {
    // Calculate the difference between the cash received and the price of the product 
    // (multiplied by 100 so that the function operates with integers in correlation 
    // to the currency object created above):
    let changeSum = cash * 100 - price * 100;

    // Create a copy of changeSum so that it can be modified with calculations later on.
    let changeSumCheck = changeSum;

    // Initialize 'change' as an empty 2D array.
    let change = [];

    // Initialize 'status' as an empty string.
    let status = '';

    // Initialize the value for cidSum, which will store the sum all of the money in the register.
    let cidSum = 0;

    // Remove denominations that have a value of zero using filter. The filter is reversed 
    // in order to go through the largest denominations first. This helps to calculate whether
    // there is enough money in the register to return the required change.
    let filteredCid = cid.filter(elem => elem[1] != 0).reverse();

    // Use forEach to cycle through each element in filteredCid. Each element will be an array 
    // with two elements, similar to the following: ["PENNY", 1.01]
    filteredCid.forEach(elem => {
        let curr = elem[0];
        let currSum = elem[1] * 100;
        cidSum += currSum;

        // Use while loop to add and subtract the correct amounts to and from the amount value, 
        // the changeSum value and the currSum value. When money is added to amount, the same value
        // is taken away from the change amount and the money left in the register.
        let amount = 0;
        while (changeSum >= currencyUnit[curr] && currSum > 0) {
            amount += currencyUnit[curr];
            changeSum -= currencyUnit[curr];
            currSum -= currencyUnit[curr];
        }

        // Use an if statement to push the name of the currency and the amount divided by 100 
        // into the change value, only if the amount value does not equal 0.
        if (amount !== 0) {
            change.push([curr, amount / 100]);
        }
    });

    // Use an if, else if and else statement to return the status that corresponds to the change given.
    if (changeSum > 0) {
        status = 'INSUFFICIENT_FUNDS';
        change = [];
    } else if (changeSum == 0 && changeSumCheck == cidSum) {
        status = 'CLOSED';
        change = cid;
    } else {
        status = 'OPEN';
    }

    return { 'status': status, 'change': change };
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));