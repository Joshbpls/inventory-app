/**
 * user: The user who caused the event
 * type: The event type (add/remove/edit)
 */

export interface NameHolder {
    name?: string
}

export interface InventoryEvent {
    user: NameHolder
    action: string
    timestamp: number
}