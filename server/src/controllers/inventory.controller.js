import { 
    getInventoryList, 
    addProductToInventory, 
    softDeleteProductFromInventory, 
    hardDeleteProductFromInventory 
} from '../services/db.services.js';

// Get all active inventory items (excluding soft-deleted items)
const getInventoryItems = async () => {
    try {
        const res = await getInventoryList(); // Ensure this query excludes `DELETED = true`
        return res.rows;
    } catch (err) {
        console.error("Failed to get inventory list: ", err);
        throw err; // Re-throw the error for higher-level handling
    }
};

// Add or update inventory items
const addInventoryItems = async (items) => {
    try {
        return await Promise.all(
            items
                .filter((item) => item.inventoryName !== null && item.productName !== null) // Ensure valid items
                .map(async (item) => {
                    const res = await addProductToInventory(Object.values(item)); // Insert or update
                    console.log("Success! Inserted/Updated: ", res.rows);
                    return res;
                })
        );
    } catch (err) {
        console.error("Failed to insert/update item: ", err);
        throw err; // Re-throw the error for higher-level handling
    }
};

// Soft delete inventory items
const softDeleteInventoryItems = async (item) => {
    try {
        const res = await softDeleteProductFromInventory(item.inventoryId); // Use inventoryId for soft delete
        console.log("Success! Soft deleted: ", item.inventoryName);
        return res;
    } catch (err) {
        console.error("Failed to soft delete item: ", err);
        throw err; // Re-throw the error for higher-level handling
    }
};

// Hard delete inventory items (permanent removal)
const hardDeleteInventoryItems = async (item) => {
    try {
        const res = await hardDeleteProductFromInventory(item.inventoryId); // Use inventoryId for hard delete
        console.log("Success! Hard deleted: ", item.inventoryName);
        return res;
    } catch (err) {
        console.error("Failed to hard delete item: ", err);
        throw err; // Re-throw the error for higher-level handling
    }
};

export {
    getInventoryItems,
    addInventoryItems,
    softDeleteInventoryItems,
    hardDeleteInventoryItems
};