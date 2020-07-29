import * as React from 'react'

import { AsdfLimit } from '@models'
import * as styles from '@styles/asdf.css'

interface AsdfProps {
    which: AsdfLimit
    value: number
    toSwap?: boolean
    onClick: (which: AsdfLimit, value: number) => void
}

function getBaseClasses (which: AsdfLimit) {
    return styles.base + ' ' + (styles as any)[which]
}

function getButtonClasses (toSwap?: boolean) {
    return `${styles.buttonOverlay} ${toSwap ? styles.swapFromButton : ''}`
}

export function Asdf ({ which, value, toSwap, onClick }: AsdfProps) {

    return (
        <div className={getBaseClasses(which)}>
            <div className={styles.label}>{which[0].toUpperCase()}</div>
            <div className={styles.value}>{value}</div>
            <button onClick={() => onClick(which, value)} className={getButtonClasses(toSwap)}>click to swap {which} value</button>
        </div>
    )
}