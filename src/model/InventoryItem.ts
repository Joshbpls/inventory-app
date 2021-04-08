/**
 * id: the item id (optional because the backend will handle id assigning so it will not be supplied when creating)
 * name: name of the item
 * amount: the amount of the item in the inventory
 * location: where the item is location on the property (optional)
 * threshold: when to alert when the item gets low (optional)
 * category: the category name (optional)
 */
export interface InventoryItem {
    id?: string
    name: string
    amount: number
    location?: string
    threshold?: number
    category?: string
}