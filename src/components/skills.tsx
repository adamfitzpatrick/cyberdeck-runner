import * as React from 'react'
import { Skill } from '@components'

import * as styles from '@styles/skills.css'

export function Skills () {
    const skill = {
        rating: 6,
        applySpecialization: false
    }

    const toggleSpecialization = () => {}

    return (
        <div className={styles.base}>
            <Skill label='computer' skill={skill} toggleSpecialization={toggleSpecialization} />
        </div>
    )
}