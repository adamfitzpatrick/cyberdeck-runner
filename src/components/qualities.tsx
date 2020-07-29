import * as React from 'react'

import { useDataContext } from '@context'
import * as styles from '@styles/qualities.css'
import { Toggle } from './toggle'
import { DeckerQualities } from '@models'

export function Qualities () {
    const { decker, setDecker } = useDataContext()
    const qualities = { ...decker.qualities }

    function toggler (prop: keyof DeckerQualities) {
        return () => {
            qualities[prop] = !qualities[prop]
            setDecker({ ...decker, qualities: { ...qualities } })
        }
    }

    return (
        <section className={styles.base}>
            <h2 className={styles.heading}>Qualities</h2>
            <Toggle label={'Impenetrable Logic'} on={decker.qualities.impenetrableLogic || false} onToggle={toggler('impenetrableLogic')} />
            <Toggle label={'Overdrive'} on={decker.qualities.overdrive || false} onToggle={toggler('overdrive')} />
        </section>
    )
}