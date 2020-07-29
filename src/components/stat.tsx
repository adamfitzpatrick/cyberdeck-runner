import * as React from 'react'

import * as styles from '@styles/stat.css'

const arcRadius = 96
const arcBoxDimension = 200

interface StatProps {
    label: string
    value: string | number
    graphic100?: number
}

function getStroke (value: number, max: number) {
    const ratio = value / max
    const r = (1 - ratio) * 255
    const g = ratio * 255
    return `rgb(${r}, ${g}, 0)`
}

function getSvg (value: number, max: number) {
    const angle = value / max * 2 * Math.PI
    const x = value === max ? 99 : arcBoxDimension / 2 + arcRadius * Math.sin(angle)
    const y = arcBoxDimension / 2 - arcRadius * Math.cos(angle)
    const largeFlag = angle > Math.PI ? 1 : 0
    return <path className={styles.arc} d={`M 100 4 A ${arcRadius} ${arcRadius} 0 ${largeFlag} 1 ${x} ${y}`} stroke={getStroke(value, max)} />
}

function getGraphicStat (label: string, value: number, max: number) {
    return (
        <div className={`${styles.base} ${styles.graphicBase}`}>
            <div className={styles.graphic}>
                <svg viewBox='0 0 200 200'>
                    {getSvg(value, max)}
                </svg>
            </div>
            <div className={styles.dataWrapper}>
                <div className={styles.label}>{label}</div>
                <div>{value}</div>
            </div>
        </div>
    )
}

function getNonGraphicStat (label: string, value: string | number) {
    return (
        <div className={styles.base}>
            <div className={styles.label}>{label}</div>
            <div>{value}</div>
        </div>
    )
}

export function Stat ({ label, value, graphic100 }: StatProps) {
    if (typeof value === 'string' && graphic100) {
        throw new Error('Cannot display graphic with string data')
    }

    if (graphic100) {
        return getGraphicStat(label, value as number, graphic100)
    }
    return getNonGraphicStat(label, value)
}