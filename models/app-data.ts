import { Deck, Decker, Environment } from '@models'

export interface AppData {
    id: string
    deck: Deck
    decker: Decker
    environment: Environment
}

export interface AppDataApi extends AppData {
    setDeck: (deckStats: Deck) => void
    setDecker: (decker: Decker) => void
    setEnvironment: (environment: Environment) => void
}