import * as React from 'react'

import * as styles from '@styles/environment.css'
import { Toggle } from './toggle'
import { useDataContext } from '@context'
import { Environment, BooleanEnvironmentKeys, NumericEnvironmentKeys } from '@models'
import { NumberInput } from './number-input'
import { Switch } from '@components'

export function Environment () {
    const { environment, setEnvironment } = useDataContext()

    const toggler = (prop: BooleanEnvironmentKeys) => {
        return () => {
            environment[prop] = !environment[prop]
            setEnvironment({ ...environment })
        }
    }

    const numberHandler = (prop: NumericEnvironmentKeys) => {
        return (value: number) => {
            environment[prop] = value
            setEnvironment({ ...environment })
        }
    }

    const getHotSimClasses = () => {
        return styles.hotSimBlock + ' ' + (environment.vr ? styles.hotSimBlockVisible : '')
    }

    return (
        <section>
            <h2 className={styles.heading}>Environment</h2>
            <div className={styles.modeBlock}>
                <Switch
                    label='Mode'
                    trueLabel='VR'
                    falseLabel='AR'
                    value={environment.vr}
                    reverseColor={true}
                    onToggle={toggler('vr')}
                />
                <div className={getHotSimClasses()}>
                    <Toggle label='Hot Sim' on={environment.hotSim} onToggle={toggler('hotSim')} />
                </div>
            </div>
            <Toggle label='Running Silent' on={environment.runningSilent} onToggle={toggler('runningSilent')} />
            <Toggle label='Public Grid' on={environment.publicGrid} onToggle={toggler('publicGrid')} />
            <Toggle label='Target Other Grid' on={environment.targetOtherGrid} onToggle={toggler('targetOtherGrid')} />
            <Toggle label='In Host' on={environment.inHost} onToggle={toggler('inHost')} />
            <NumberInput label='Teamwork' value={environment.teamwork} onChange={numberHandler('teamwork')} />
            <NumberInput label='Noise' value={environment.noise} onChange={numberHandler('noise')} />
        </section>
    )
}
