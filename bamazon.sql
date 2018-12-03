-- Then create a Table inside of that database called products.

-- The products table should have each of the following columns:

-- item_id (unique id for each product)

-- product_name (Name of product)

-- department_name

-- price (cost to customer)

-- stock_quantity (how much of the product is available in stores)

-- Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

DROP DATABASE IF EXISTS products_db;
CREATE database products_db;

USE products_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(150) NOT NULL,
  department_name VARCHAR(200) NOT NULL,
  price INTEGER(10,4) NOT NULL,
  stock_quantity INTEGER(50) NOT NULL
);


