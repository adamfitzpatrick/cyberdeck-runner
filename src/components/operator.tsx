import * as React from 'react'

import * as styles from '@styles/operator.css'
import { useDataContext } from '@context'
import { Stat, Edge } from '@components'
import { attributeKeys, Attribute } from '@models'

export function Operator () {
    const { decker } = useDataContext()

    const max = attributeKeys.reduce((accum: number, key: Attribute) => Math.max(decker.attributes[key], accum), 0)

    return (
        <section>
            <h2 className={styles.heading}>Operator Statistics</h2>
            <div className={styles.attributes}>
                <Stat label='bod' value={decker.attributes.body} graphic100={max} />
                <Stat label='agi' value={decker.attributes.agility} graphic100={max} />
                <Stat label='rea' value={decker.attributes.reaction} graphic100={max} />
                <Stat label='str' value={decker.attributes.strength} graphic100={max} />
                <Stat label='wil' value={decker.attributes.willpower} graphic100={max} />
                <Stat label='int' value={decker.attributes.intuition} graphic100={max} />
                <Stat label='log' value={decker.attributes.logic} graphic100={max} />
                <Stat label='cha' value={decker.attributes.charisma} graphic100={max} />
                <Edge />
            </div>
        </section>
    )
}