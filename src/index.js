'use strict'

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'mobx-react'
import {App} from './App'
import {Store} from './Store'

const store = new Store()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

module.hot.accept()