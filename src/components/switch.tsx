import * as React from 'react'

import * as styles from '@styles/switch.css'

interface SwitchProps {
    label: string
    value: boolean
    trueLabel?: string
    falseLabel?: string
    reverseColor?: boolean
    onToggle: () => void
}

export function Switch({ label, value, trueLabel, falseLabel, reverseColor, onToggle }: SwitchProps) {
    function getTrackClasses () {
        const green = (!reverseColor && value) || (reverseColor && !value)
        return styles.track + ' ' + (green ? styles.trackTrue : '')
    }

    function getSliderClasses () {
        return styles.slider + ' ' + (value ? styles.sliderTrue : '')
    }

    function getIndicatorClasses (trueSide: boolean) {
        return styles.valueLabel +  ' ' + (value !== trueSide ? styles.valueLabelHidden: '')
    }

    function onClick () { onToggle() }

    return (
        <div className={styles.base}>
            <div className={styles.label}>{label}</div>
            <div className={getTrackClasses()}>
                <div className={getIndicatorClasses(true)}>{trueLabel}</div>
                <div className={getIndicatorClasses(false)}>{falseLabel}</div>
                <div className={getSliderClasses()} />
            </div>
            <button className={styles.buttonOverlay} onClick={onClick}>Click to switch AR/VR</button>
        </div>
    )
}