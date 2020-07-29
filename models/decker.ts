import { Skills, Attributes } from "@models"

export interface DeckerQualities {
    impenetrableLogic: boolean
    overdrive: boolean
}

export interface DeckerAugs {
    neocorticalNanites: boolean
    neocorticalNanitesRating?: number
    pushed: boolean
    dataJackWireless: boolean
    dataJacks?: number
    antennaWireless: boolean
    antennae?: number
    narco: boolean
}

export type BooleanAugKeys = 'neocorticalNanites' | 'pushed' | 'dataJackWireless' | 'antennaWireless' | 'narco'
export type NumericAugKeys = 'neocorticalNanitesRating' | 'dataJacks' | 'antennae'

export interface DeckerDrugs {
    cereprax: boolean
    chillBtl: boolean
    hurlg: boolean
    novacoke: boolean
    overdrive: boolean
    psyche: boolean
    redMesc: boolean
    trance: boolean
    zen: boolean
}

export interface Decker {
    augs: DeckerAugs
    currentPhysical: number
    currentStun: number
    drugs: DeckerDrugs
    edge: number
    edgeUsed: number
    qualities: DeckerQualities
    attributes: Attributes
    skills: Skills
}