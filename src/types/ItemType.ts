/**
 * name: name of the item
 * amount: the amount of the item in the inventory
 * threshold: when to alert when the item gets low (optional)
 * category: the category name (optional)
 */
export interface ItemType {
    name: string
    amount: number
    threshold?: number
    category?: string
}