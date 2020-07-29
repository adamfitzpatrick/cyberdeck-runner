import { Deck, Decker, Environment } from '@models'

export const defaultDeckStats: Deck = {
    model: 'Shiawase Cyber-5',
    deckLimits: {
        attack: 1,
        sleaze: 2,
        dataProcessing: 3,
        firewall: 4
    },
    deviceRating: 4,
    programSlots: 4,
    conditionMonitor: 12,
    currentCondition: 0
}

export const defaultDecker: Decker = {
    augs: {
        antennaWireless: false,
        dataJackWireless: false,
        narco: false,
        neocorticalNanites: false,
        pushed: false
    },
    currentPhysical: 0,
    currentStun: 0,
    drugs: {
        cereprax: false,
        chillBtl: false,
        hurlg: false,
        novacoke: false,
        overdrive: false,
        psyche: false,
        redMesc: false,
        trance: false,
        zen: false
    },
    edge: 6,
    edgeUsed: 2,
    qualities: {
        impenetrableLogic: false,
        overdrive: false
    },
    attributes: {
        body: 2,
        agility: 3,
        reaction: 5,
        strength: 1,
        willpower: 5,
        intuition: 6,
        logic: 9,
        charisma: 3
    },
    skills: {}
}

export const defaultEnvironment: Environment = {
    inHost: false,
    noise: 0,
    vr: false,
    hotSim: false,
    runningSilent: false,
    publicGrid: false,
    targetOtherGrid: false,
    teamwork: 0
}