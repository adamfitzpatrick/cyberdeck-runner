import * as React from 'react'

import * as styles from '@styles/marque.css'
import { useDataContext, useStateContext } from '@context'

export function Marque () {
    const { deck } = useDataContext();
    const { setShowEditor } = useStateContext()

    return (
        <div className={styles.base}>
            <div className={styles.interior}>
                <h1 className={styles.heading}>{ deck.model }</h1>
                <button className={`${styles.settings} material-icons`} onClick={() => setShowEditor(true)}>
                    settings
                </button>
            </div>
        </div>
    )
}