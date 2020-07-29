import { useState } from 'react'
import { AppState } from "@models";

export default function generateStateApi (appState: AppState) {
    const [ showEditor, setShowEditor ] = useState<boolean>(appState.showEditor)

    return { showEditor, setShowEditor }
}