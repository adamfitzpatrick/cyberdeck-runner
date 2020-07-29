import * as React from 'react'

import { AsdfBlock, Augs, Drugs, Editor, Marque, Operator, Skills } from '@components'

import * as styles from '@styles/app.css'

import { useStateContext } from '@context'
import { Environment } from './environment'

export function App () {
    const { showEditor, setShowEditor } = useStateContext()
    const closeEditor = () => setShowEditor(false)

    return (
        <main className={styles.app}>
            <div className={styles.sidebar}>
                <AsdfBlock />
                <Augs />
                <Drugs />
            </div>
            <div className={styles.center}>
                <Marque />
            </div>
            <div className={styles.sidebar}>
                <Environment />
                <Operator />
                <Skills />
            </div>
            <Editor show={showEditor} onClose={closeEditor} />
        </main>
    )
}