export interface AppState {
    showEditor: boolean
}

export interface AppStateApi extends AppState {
    setShowEditor: (showEditor: boolean) => void
}