INSERT INTO productlist
VALUES (DEFAULT, $1, $2, $3, $4, $5)
RETURNING product_name;