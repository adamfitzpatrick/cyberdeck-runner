import * as React from 'react'

import * as styles from '@styles/skill.css'
import { Skill, Skills } from '@models'

interface SkillProps {
    label: keyof Skills
    skill: Skill
    toggleSpecialization: () => void
}

export function Skill ({ label, skill, toggleSpecialization }: SkillProps) {
    return (
        <div className={styles.base}>
            <div>
                <div>{label}</div>
                <button className={styles.specializationButton}>Apply Specialization</button>
            </div>
            <div className={styles.rating}>{skill.rating}</div>
        </div>
    )
}