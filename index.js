import inquirer from "inquirer";
let conversion = {
    "PKR": {
        "USD": 0.0035,
        "GBP": 0.0027,
        "PKR": 1,
    },
    "GBP": {
        "USD": 1.28,
        "PKR": 366.84,
        "GBP": 1,
    },
    "USD": {
        "GBP": 0.78,
        "PKR": 287.27,
        "USD": 1,
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "GBP", "USD"],
        message: "Please select your currency",
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "GBP", "USD"],
        message: "Please select conversion rate",
    },
    {
        type: "number",
        name: "amount",
        message: "Please enter amount",
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`your conversion from ${from} to ${to} is ${result}`);
}
else {
    console.log("INvalid Output");
}
