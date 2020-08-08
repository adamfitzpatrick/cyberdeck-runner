import * as React from 'react'
import { render } from 'react-dom'

import { App } from '@components'
import { Store } from '@context'

import '@styles/global.css'
import { load } from '@services'

let { data, state } = load('1')

const target = document.getElementById('home')

if (target) {
  render((
    <Store data={data!} state={state!}><App /></Store>
  ), target)
}
