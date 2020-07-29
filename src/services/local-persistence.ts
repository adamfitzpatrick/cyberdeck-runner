import { AppData, AppState } from "@models";
import { locals } from "@styles/marque.css";

const LOCAL_PERSISTENCE_NAMESPACE = 'cyberdeck-runner.'

export function save (data: AppData, state: AppState) {
    localStorage.setItem(LOCAL_PERSISTENCE_NAMESPACE + 'data.' + data.id, JSON.stringify(data))
    localStorage.setItem(LOCAL_PERSISTENCE_NAMESPACE + 'state.' + data.id, JSON.stringify(state))
}

export function load (id: string): { data: AppData | null, state: AppState | null } {
    const dataString = localStorage.getItem(LOCAL_PERSISTENCE_NAMESPACE + 'data.' + id)
    const stateString = localStorage.getItem(LOCAL_PERSISTENCE_NAMESPACE + 'state.' + id)
    const loaded = { data: null, state: null }
    try {
        loaded.data = JSON.parse(dataString!)
        loaded.state = JSON.parse(stateString!)
    } catch (e) {
        // intentional fall through
    }
    return loaded
}