import { useState } from 'react'
import {
    AppData,
    AppDataApi,
    Deck,
    Decker,
    Environment
} from '@models'

export default function generateDataApi (data: AppData): AppDataApi {
    const [ deck, setDeck ] = useState<Deck>(data.deck)
    const [ decker, setDecker ] = useState<Decker>(data.decker)
    const [ environment, setEnvironment ] = useState<Environment>(data.environment)

    return {
        id: data.id,
        deck,
        decker,
        environment,
        setDeck,
        setDecker,
        setEnvironment
    }
}