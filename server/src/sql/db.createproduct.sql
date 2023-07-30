INSERT INTO alcoholproductlist (PRODUCT_NAME, PACKAGE_SIZE, FULL_WEIGHT, EMPTY_WEIGHT, SUPPLIER)
VALUES ($1, $2, $3, $4, $5)
ON CONFLICT (PRODUCT_NAME) DO
UPDATE SET PACKAGE_SIZE = $2, FULL_WEIGHT = $3, EMPTY_WEIGHT = $4, SUPPLIER = $5
RETURNING PRODUCT_NAME;