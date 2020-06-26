import * as React from 'react'
import { render } from 'react-dom'

import { App } from '@components'

const target = document.getElementById('home')

if (target) {
  render((
    <App />
  ), target)
}
