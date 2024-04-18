#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
import chalkanimation from "chalk-animation"

//   chalkanimation is used for the welcome note

const sleep = () => { return new Promise(resolve => setTimeout(resolve, 2000)); };

async function  wellcome(){
  let rainbowTiyle = chalkanimation.rainbow("*** wellcome to the currency converter page ***");
  await sleep();
  rainbowTiyle.stop();
} 
await wellcome(); 


// define the list of currencies and their exchange rates.
let exchangeRate:any={
    "USD":1,
    "EUR":0.9,
    "GBP":0.8,
    "JPY":0.95,
    "AUD":1.7,
    "CAD":1.5,
    "CHF":1.1,
    "CNY":7.0,
    "HKD":9.5,
    "PKR":277.570254,
}
// which currency to convert to

let userAnswers = await inquirer.prompt([{
    name: "fromCurrency",
    type:"list",
    message:chalk.blue.bold("select the currency to convert from "),
    choices: ["USD", "EUR", " GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "HKD", "PKR", ]

},
// which currency to convert to other currency
{
    name: "toCurrency",
    type:"list",
    message: chalk.green.bold("select the currency to convert into "),
    choices: ["USD", "EUR", " GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "HKD", "PKR", ]
}, 
// user options
{
    name: "amount",
    type:"input",
    message:chalk.magenta.bold("enter the amount to convert")
}

])
const from_amount = exchangeRate[userAnswers.fromCurrency];

let to_amount = exchangeRate[userAnswers.toCurrency];
let amount = userAnswers.amount

// formula of conversion
let base_amount = amount/from_amount;
let converted_amount = base_amount * to_amount
console.log(`your converted amount is = ${chalk.blue.bold(converted_amount.toFixed(2))}`);





