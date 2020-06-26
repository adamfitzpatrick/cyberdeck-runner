import generateCombatants from './combatants'

const mocks = {
    generateCombatants
}

interface WindowWithMocks extends Window {
    MOCKS?: typeof mocks
}

const windowWithMocks = (window as any  as WindowWithMocks)
windowWithMocks.MOCKS = mocks

