import { ActionType, AsdfLimit, MarkCounts } from "@models"
import { Attribute, Skills } from "@models"

export type Test = (keyof Skills | AsdfLimit | Attribute)[]

export interface Program {
    name: string
    description: string
    actionType: ActionType
    marks: MarkCounts
    limit: AsdfLimit
    test: Test
    opposition?: Test
}