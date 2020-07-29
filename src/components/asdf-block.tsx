import * as React from 'react'

import { Asdf } from '@components'
import { AppDataApi } from 'models/app-data'
import { appContext, useDataContext } from '@context'
import { AsdfLimit } from '@models'

import * as styles from '@styles/asdf-block.css'

export function AsdfBlock () {
    const { deck, setDeck } = useDataContext()

    const [ swapFrom, setSwapFrom ] = React.useState<null | AsdfLimit>(null)
    const [ swapFromValue, setSwapFromValue ] = React.useState<null | number>(null)

    const startSwap = (which: AsdfLimit | null, value: number | null) => {
        setSwapFrom(which)
        setSwapFromValue(value)
    }

    const clickHandler = (which: AsdfLimit, value: number) => {
        if (!swapFrom) {
            startSwap(which, value)
        } else {
            deck.deckLimits[swapFrom] = value
            deck.deckLimits[which] = swapFromValue!
            setDeck({ ...deck })
            startSwap(null, null)
        }
        // Note that there should never be a circumstance when swapFrom is truthy and swapFromValue is not.
    }

    return (
        <section className={styles.base}>
            <h2 className={styles.heading}>ASDF</h2>
            <Asdf which='attack' value={deck.deckLimits.attack} onClick={clickHandler} toSwap={swapFrom === 'attack'} />
            <Asdf which='sleaze' value={deck.deckLimits.sleaze} onClick={clickHandler} toSwap={swapFrom === 'sleaze'} />
            <Asdf which='dataProcessing' value={deck.deckLimits.dataProcessing} onClick={clickHandler} toSwap={swapFrom === 'dataProcessing'} />
            <Asdf which='firewall' value={deck.deckLimits.firewall} onClick={clickHandler} toSwap={swapFrom === 'firewall'} />
        </section>
    )
}