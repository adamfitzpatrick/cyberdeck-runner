import * as jsf from 'json-schema-faker'
import * as faker from 'faker'
jsf.extend('faker', () => faker)
import * as combatantSchema from './combatant-schema.json'
import { Combatant } from '@models'

const generateCombatants = (count: number) => {
    return [...Array(count)].map(() => jsf.generate<Combatant>(combatantSchema))
}

export default generateCombatants