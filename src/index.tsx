import * as React from 'react'
import { render } from 'react-dom'

import { App } from '@components'
import { Store, defaultDecker } from '@context'

import '@styles/global.css'
import { load } from '@services'

const { data, state } = load('1')
// data!.decker = defaultDecker

const target = document.getElementById('home')

if (target) {
  render((
    <Store data={data!} state={state!}><App /></Store>
  ), target)
}
