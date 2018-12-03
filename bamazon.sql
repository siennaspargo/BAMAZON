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

-- mock data 10 products

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("OLEHENRIKSEN Nurture Me Moisturizing Crème", "Sephora", 40.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("OOLEHENRIKSEN Counter Balance™ Oil Control Hydrator", "Sephora", 34.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("OLEHENRIKSEN Pure Truth™ Youth Activating Oil", "Sephora", 45.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("OOLEHENRIKSEN Uplifting Transformation™ Eye Crème", "Sephora", 42.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("URBAN DECAY Naked2 Palette", "Sephora", 54.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("URBAN DECAY Eyeshadow Primer Potion - Original", "Sephora", 24.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("URBAN DECAY De-Slick Oil-Control Makeup Setting Spray", "Sephora", 32.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BITE BEAUTY Sweet Treats Agave Lip Care Set", "Sephora", 16.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("DRYBAR Triple Sec 3-in-1", "Sephora", 26.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("DRYBAR Detox Dry Conditioner", "Sephora", 23.00, 100);


