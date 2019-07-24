import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route } from 'react-router-dom'

import Homepage from './components/common/Homepage'

fetch('/api/recipes')

const App = () => {
  return(
    <BrowserRouter>
      <main>
        <Route exact path="/" component={Homepage} />

      </main>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
