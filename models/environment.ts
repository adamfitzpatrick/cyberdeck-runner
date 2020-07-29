export interface Environment {
    hotSim: boolean
    inHost: boolean
    noise: number
    publicGrid: boolean
    runningSilent: boolean
    targetOtherGrid: boolean
    teamwork: number
    vr: boolean
}

export type BooleanEnvironmentKeys = 'inHost' | 'vr' | 'hotSim' | 'runningSilent' | 'publicGrid' | 'targetOtherGrid'
export type NumericEnvironmentKeys = 'noise' | 'teamwork'