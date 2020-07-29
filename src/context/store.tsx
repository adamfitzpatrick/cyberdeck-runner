import * as React from 'react'
import { AppData, AppDataApi, AppState, AppStateApi } from '@models'
import { save } from '@services'
import generateDataApi from './data-api'
import generateStateApi from './state-api'

interface AppContextValue {
    data: AppDataApi,
    state: AppStateApi
}

const nullableContext = React.createContext<null | AppContextValue>(null)
export const appContext = nullableContext as React.Context<AppContextValue>

interface StoreProps {
    data: AppData
    state: AppState
    children: React.ReactChild | React.ReactChildren
}

export function Store ({ data, state, children }: StoreProps) {
    const dataApi = generateDataApi(data)
    const stateApi = generateStateApi(state)

    React.useEffect(() => {
        save(dataApi, stateApi)
    })

    return <appContext.Provider value={{ data: dataApi, state: stateApi }}>{ children }</appContext.Provider>
}

export function useDataContext () {
    return React.useContext<AppContextValue>(appContext).data
}

export function useStateContext () {
    return React.useContext<AppContextValue>(appContext).state
}