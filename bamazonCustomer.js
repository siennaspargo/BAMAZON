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
connection.connect(function (err) {
  if (err) {
    console.log("there is an error: " + err)
  };
  displayProducts();
});

// Print products to the console

function displayProducts() {
  // Selects all of the data from the MySQL products table
  connection.query("SELECT * FROM products", function (err, results) {
    if (err) {
      console.log("there is an error: " + err)
      // console the results
      console.log(results);

      // Then prompt the customer for their choice of product, pass all the products to promptCustomerForItem
      chosenProduct(results);
    }
  })
}

// prompt user with 2 messages :
// What product would you like to buy?
function chosenProduct() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "Which Sephora product would you like to buy?",
      choices: [
        "OLEHENRIKSEN Nurture Me Moisturizing Crème",
        "OOLEHENRIKSEN Counter Balance™ Oil Control Hydrator",
        "OLEHENRIKSEN Pure Truth™ Youth Activating Oil",
        "OOLEHENRIKSEN Uplifting Transformation™ Eye Crème",
        "URBAN DECAY Eyeshadow Primer Potion - Original",
        "URBAN DECAY Naked2 Palette",
        "BITE BEAUTY Sweet Treats Agave Lip Care Set",
        "DRYBAR Triple Sec 3-in-1",
        "DRYBAR Detox Dry Conditioner"
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "OLEHENRIKSEN Nurture Me Moisturizing Crème":
          nurtureMe();
          break;

        case "OOLEHENRIKSEN Counter Balance™ Oil Control Hydrator":
          balanceMe();
          break;

        case "OLEHENRIKSEN Pure Truth™ Youth Activating Oil":
          youthSerumMe();
          break;

        case "OOLEHENRIKSEN Uplifting Transformation™ Eye Crème":
          eyeCream();
          break;

        case "URBAN DECAY Eyeshadow Primer Potion - Original":
          saveEnhancement();
          break;

        case "URBAN DECAY Naked2 Palette":
          enhanceMe();
          break;

        case "BITE BEAUTY Sweet Treats Agave Lip Care Set":
          agaveScrub();
          break;

        case "DRYBAR Triple Sec 3-in-1":
          saveDirtyHair();
          break;

        case "DRYBAR Detox Dry Conditioner":
          smoothifyMe();
          break;
      }
    });

  console.log(answer)
}

// How many of this product would you like to buy?

function nurtureMe() {
  inquirer
    .prompt({
      name: "nurtureCreme",
      type: "input",
      message: "How many of this product would you like to buy?"
    })
    .then(function (answer) {
      var query = "SELECT product_name, stock_quantity FROM products_db WHERE ?";
      connection.query(query, {
          name: answer.nurtureCreme
        },
        function (res) {
          for (var i = 0; i < res.length; i++) {
            console.log("We have " + res[i].stock_quantity + " of " + res[i].product_name + " left in our stock.")
          }
          runSearch();
        });
    });
}

function balanceMe() {
  inquirer
    .prompt({
      name: "oilControl",
      type: "input",
      message: "How many of this product would you like to buy?"
    })
    .then(function (answer) {
      var query = "SELECT product_name, stock_quantity FROM products_db WHERE ?";
      connection.query(query, {
          name: answer.oilControl
        },
        function (res) {
          for (var i = 0; i < res.length; i++) {
            console.log("We have " + res[i].stock_quantity + " of " + res[i].product_name + " left in our stock.")
          }
          runSearch();
        });
    });
}


function youthSerumMe() {
  inquirer
    .prompt({
      name: "youthSerum",
      type: "input",
      message: "How many of this product would you like to buy?"
    })
    .then(function (answer) {
      var query = "SELECT product_name, stock_quantity FROM products_db WHERE ?";
      connection.query(query, {
          name: answer.youthSerum
        },
        function (res) {
          for (var i = 0; i < res.length; i++) {
            console.log("We have " + res[i].stock_quantity + " of " + res[i].product_name + " left in our stock.")
          }
          runSearch();
        });
    });
}

// App checks to see if there is enough of the product for customer.

// if not enough product, alert customer "insufficient quantity, prevent order from going through. "

// if enough product, push order through to customer.

// update mysql database to reflect quantity

// show customer total cost of purchase

nurtureMe()