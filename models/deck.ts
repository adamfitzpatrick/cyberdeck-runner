export interface DeckLimits {
    attack: number,
    sleaze: number,
    dataProcessing: number,
    firewall: number
}

export type AsdfLimit = keyof DeckLimits

export interface Deck {
    model: string
    deckLimits: DeckLimits
    deviceRating: number
    programSlots: number
    conditionMonitor: number
    currentCondition: number
}