import * as React from 'react'

import * as styles from '@styles/drugs.css'
import { useDataContext } from '@context'
import { Toggle } from '@components'
import { DeckerDrugs } from '@models'

export function Drugs () {
    const { decker, setDecker } = useDataContext()
    const drugs = { ...decker.drugs }

    const toggler = (prop: keyof DeckerDrugs) => {
        return () => {
            drugs[prop] = !drugs[prop]
            setDecker({ ...decker, drugs: { ...drugs } })
        }
    }

    return (
        <section className={styles.base}>
            <h2 className={styles.heading}>Chemical Aids</h2>
            <Toggle label='Cereprax' on={drugs.cereprax} onToggle={toggler('cereprax')} />
            <Toggle label='Chill BTL' on={drugs.chillBtl} onToggle={toggler('chillBtl')} />
            <Toggle label='Hurlg' on={drugs.hurlg} onToggle={toggler('hurlg')} />
            <Toggle label='Novacoke' on={drugs.novacoke} onToggle={toggler('novacoke')} />
            <Toggle label='Overdrive' on={drugs.overdrive} onToggle={toggler('overdrive')} />
            <Toggle label='Psyche' on={drugs.psyche} onToggle={toggler('psyche')} />
            <Toggle label='Red Mesc' on={drugs.redMesc} onToggle={toggler('redMesc')} />
            <Toggle label='Trance' on={drugs.trance} onToggle={toggler('trance')} />
            <Toggle label='Zen' on={drugs.zen} onToggle={toggler('zen')} />
        </section>
    )
}