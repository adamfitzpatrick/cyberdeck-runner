import * as React from 'react'

import * as styles from '@styles/toggle.css'
interface ToggleProps {
    label?: string
    on: boolean
    value?: number
    onToggle: () => void
    onNumericChange?: (value: number) => void
}

export function Toggle ({ label, on, value, onToggle, onNumericChange }: ToggleProps) {

    function handleNumeric (event: React.SyntheticEvent<HTMLInputElement>) {
        onNumericChange && onNumericChange(parseInt(event.currentTarget.value, 10))
    }

    function getNumeric () {
        if ((value || value === 0) && onNumericChange) {
            return <input className={styles.numeric} type='number' value={value} onChange={handleNumeric} />
        }
        return null
    }

    function getAriaText () {
        let text = 'click to '
        if (on) {
            text += 'de'
        }
        return text + `activate ${label}`
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.base}>
                <button className={styles.button} onClick={() => onToggle()} aria-label={getAriaText()}>
                    <span className={`${styles.indicator}  ${on ? styles.on : '' }`} />
                    <span>{label}</span>
                </button>
                {getNumeric()}
            </div>
        </div>
    )
}