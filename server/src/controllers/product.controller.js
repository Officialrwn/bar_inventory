import { createProduct, softDeleteProduct, hardDeleteProduct, getProductList } from '../services/db.services.js';
import { checkProductType } from '../utils/producttype.js';

// Get all active products (excluding soft-deleted items)
const getProductListItem = async () => {
    try {
        const res = await getProductList(); // Ensure this query excludes `DELETED = true`
        console.log("Success! Fetched product list: ", res.rows);
        return res.rows;
    } catch (err) {
        console.error("Failed to fetch product list: ", err);
        throw err; // Re-throw the error for higher-level handling
    }
};

// Add or update products
const addProductListItem = async (items, type) => {
    try {
        return await Promise.all(
            items
                .filter((item) => item.name !== null) // Ensure valid items
                .map(async (item) => {
                    const data = { ...item, productType: type }; // Add product type
                    const res = await createProduct(Object.values(data)); // Insert or update
                    console.log("Success! Inserted/Updated: ", res.rows);
                    return data.name;
                })
        );
    } catch (err) {
        console.error("Failed to insert/update product: ", err);
        throw err; // Re-throw the error for higher-level handling
    }
};

// Soft delete a product
const softDeleteProductListItem = async (productId) => {
    try {
        const res = await softDeleteProduct(productId); // Use productId for soft delete
        console.log("Success! Soft deleted product with ID: ", productId);
        return res;
    } catch (err) {
        console.error("Failed to soft delete product: ", err);
        throw err; // Re-throw the error for higher-level handling
    }
};

// Hard delete a product (permanent removal)
const hardDeleteProductListItem = async (productId) => {
    try {
        const res = await hardDeleteProduct(productId); // Use productId for hard delete
        console.log("Success! Hard deleted product with ID: ", productId);
        return res;
    } catch (err) {
        console.error("Failed to hard delete product: ", err);
        throw err; // Re-throw the error for higher-level handling
    }
};

export {
    getProductListItem,
    addProductListItem,
    softDeleteProductListItem,
    hardDeleteProductListItem
};