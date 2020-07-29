import * as React from 'react'

import * as styles from '@styles/number-input.css'

interface NumberInputProps {
    classNames?: string | string[]
    disabled?: boolean
    label: string
    value: number
    onChange: (value: number) => void
}

export function NumberInput ({ classNames, disabled, label, value, onChange }: NumberInputProps) {
    function getAdditionalClasses () {
        if (typeof classNames === 'object') {
            return classNames.join(' ')
        }
        return classNames || ''
    }

    function changeHandler (event: React.SyntheticEvent<HTMLInputElement>) {
        onChange(parseInt(event.currentTarget.value, 10))
    }

    return (
        <label className={`${styles.base} ${disabled ? styles.disabled : ''} ${getAdditionalClasses()}`}>
            {label}
            <input disabled={disabled} className={styles.input} type='number' value={value} onChange={changeHandler} />
        </label>
    )
}