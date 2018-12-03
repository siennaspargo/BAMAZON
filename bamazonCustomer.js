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
  .then(function(answer) {
    switch(answer.action) {
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
}

// How many of this product would you like to buy?


// App checks to see if there is enough of the product for customer.

// if not enough product, alert customer "insufficient quantity, prevent order from going through. "

// if enough product, push order through to customer.

// update mysql database to reflect quantity

// show customer total cost of purchase

