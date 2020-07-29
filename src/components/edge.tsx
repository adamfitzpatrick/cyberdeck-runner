import * as React from 'react'
import { useDataContext } from '@context'

import * as styles from '@styles/edge.css'

const MAX_POSSIBLE_EDGE = 7

function getIndicators(edge: number, edgeUsed: number) {
    const startEdge = MAX_POSSIBLE_EDGE - edge
    return new Array(MAX_POSSIBLE_EDGE).fill(null).map((container, index) => {
        if (index < startEdge) { return <div key={index}/> }
        return <div key={index} className={`${styles.indicator} ${index < edgeUsed + startEdge ? styles.on: ''}`} />
    })
}

export function Edge () {
    const { decker, setDecker } = useDataContext()

    function onClick () {
        let edgeUsed = decker.edgeUsed
        if (edgeUsed < decker.edge) {
            edgeUsed++
        } else {
            edgeUsed = 0
        }
        setDecker({ ...decker, edgeUsed })
    }

    return (
        <div className={styles.base}>
            <div className={styles.wrapper}>
                <div className={styles.label}>Edge</div>
                {getIndicators(decker.edge, decker.edgeUsed)}
            </div>
            <button className={styles.buttonOverlay} onClick={onClick} />
        </div>
    )
}