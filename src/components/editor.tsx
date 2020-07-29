import * as React from 'react'

import * as styles from '@styles/editor.css'
import { Deck, AppDataApi, AsdfLimit, Decker } from '@models'
import { appContext, useDataContext } from '@context'

interface EditorProps {
    show?: boolean
    onClose: () => void
}

function getInput (label: string, value: string | number, handler: (updated: string | number) => void) {
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        handler(event.currentTarget.value)
    }
    return <label>{label}: <input type="text" value={value} onChange={onChange} /></label>
}

export function Editor ({ show, onClose }: EditorProps) {
    if (!show) { return null; }

    const { deck, setDeck, decker, setDecker } = useDataContext()
    const [ localDeckStats, setLocalDeckStats ] = React.useState<Deck>(deck)
    const [ localDecker, setLocalDecker ] = React.useState<Decker>(decker)
    console.log(localDecker)
    const limits = localDeckStats.deckLimits

    function updateTopLevel (prop: keyof Deck, value: string | number | object) {
        setLocalDeckStats({ ...localDeckStats, [prop]: value })
    }

    function updateLimits (limit: AsdfLimit, value: string) {
        updateTopLevel('deckLimits', { ...localDeckStats.deckLimits, [limit]: value })
    }

    function updateDecker (prop: keyof Decker, value: string | object) {
        setLocalDecker({ ...localDecker, [prop]: (parseInt(value as string, 10) || value) as any })
    }

    function handleCloseButton () {
        setDeck({ ...localDeckStats })
        setDecker({ ...localDecker })
        onClose()
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.modal}>
                <div>
                </div>
                <div>
                    {getInput('Deck Model', localDeckStats.model, (value: string) => updateTopLevel('model', value))}
                </div>
                <div>
                    {getInput('Attack', limits.attack, (value: string) => updateLimits('attack', value))}
                    {getInput('Sleaze', limits.sleaze, (value: string) => updateLimits('sleaze', value))}
                    {getInput('Data Processing', limits.dataProcessing, (value: string) => updateLimits('dataProcessing', value))}
                    {getInput('Firewall', limits.firewall, (value: string) => updateLimits('firewall', value))}
                </div>
                <div>
                    {getInput('Edge', localDecker.edge, (value: string) => updateDecker('edge', value))}
                </div>
                <button onClick={handleCloseButton}>close</button>
            </div>
        </div>
    )
}