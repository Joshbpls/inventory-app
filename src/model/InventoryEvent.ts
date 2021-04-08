/**
 * user: The user who caused the event
 * type: The event type (add/remove/edit)
 */

export interface InventoryEvent {
    user: string
    type: string
}