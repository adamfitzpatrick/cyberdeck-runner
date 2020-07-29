import * as React from 'react'

import { Toggle } from '@components'
import * as styles from '@styles/augs.css'
import { useDataContext } from '@context'
import { DeckerAugs, BooleanAugKeys, NumericAugKeys } from '@models'
import { NumberInput } from './number-input'

export function Augs () {
    const { decker, setDecker } = useDataContext()
    const augs = { ...decker.augs }

    function toggler (prop: BooleanAugKeys) {
        return () => {
            augs[prop] = !augs[prop]
            setDecker({ ...decker, augs: { ...augs } })
        }
    }

    function numberHandler (prop: NumericAugKeys) {
        return (value: number) => {
            augs[prop] = value
            setDecker({ ...decker, augs: { ...augs } })
        }
    }

    function getToggle (label: string, on: boolean, togglerProp: BooleanAugKeys, value?: number, numericProp?: NumericAugKeys) {
        return <Toggle
            label={label}
            on={on}
            onToggle={toggler(togglerProp)}
            value={value}
            onNumericChange={numericProp ? numberHandler(numericProp) : undefined}
        />
    }

    return (
        <section className={styles.base}>
            <h2 className={styles.heading}>Augmentations</h2>
            {getToggle(
                'Antennae',
                augs.antennaWireless || false,
                'antennaWireless', augs.antennaWireless ? augs.antennae || 0 : undefined,
                'antennae'
            )}
            {getToggle(
                'Data Jacks',
                augs.dataJackWireless || false,
                'dataJackWireless',
                augs.dataJackWireless ? augs.dataJacks || 0 : undefined,
                'dataJacks'
            )}
            {getToggle('Narco', augs.narco || false, 'narco')}
            {getToggle(
                'Neo. Nanites',
                augs.neocorticalNanites || false,
                'neocorticalNanites',
                augs.neocorticalNanites ? augs.neocorticalNanitesRating || 0 : undefined,
                'neocorticalNanitesRating'
            )}
            {getToggle('PuSHed', augs.pushed || false, 'pushed')}
        </section>
    )
}