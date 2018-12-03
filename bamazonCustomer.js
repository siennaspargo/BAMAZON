console.log("Sienna Spargo's Customer View Bamazon APP.")

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "mypassword",
  database: "products_db"
});
// create connection to mysql
connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

// prompt user with 2 messages :
// What product would you like to buy?

// How many of this product would you like to buy?


// App checks to see if there is enough of the product for customer.

// if not enough product, alert customer "insufficient quantity, prevent order from going through. "

// if enough product, push order through to customer.

// update mysql database to reflect quantity

// show customer total cost of purchase

