import { defaultDecker, defaultDeckStats, defaultEnvironment } from './defaults'
import { save } from '@services'

export const populateMockData = () => {
    save({
        id: '1',
        deck: defaultDeckStats,
        decker: defaultDecker,
        environment: defaultEnvironment
    }, {
        showEditor: false
    })
}

if (window) {
    (window as { [objName: string]: any })['__populateMockData'] = populateMockData
}