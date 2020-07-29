export type ActionType = 'simple' | 'complex' | 'free'

export type MarkCounts = 1 | 2 | 3 | 'owner'

export type Attribute = 'body' | 'agility' | 'reaction' | 'strength' | 'willpower' | 'intuition' | 'logic' | 'charisma'
export const attributeKeys =[ 'body', 'agility', 'reaction', 'strength', 'willpower', 'intuition', 'logic', 'charisma' ]
export type Attributes = Record<Attribute, number>

export interface Skill {
    rating: number
    applySpecialization: boolean
}

export interface Skills {
    computer?: Skill
    cybercombat?: Skill
    hacking?: Skill
    electronicWarfare?: Skill
}