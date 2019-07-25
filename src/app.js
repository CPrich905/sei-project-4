import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Homepage from './components/common/Homepage'
import RecipesIndex from './components/recipes/RecipesIndex'
import RecipeShow from './components/recipes/RecipeShow'
import RecipeNew from './components/recipes/RecipeNew'

// fetch('/api/recipes')

const App = () => {
  return(
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/recipes/new" component={RecipeNew}/>
          <Route path="/recipes/:id" component={RecipeShow} />
          <Route path="/recipes" component={RecipesIndex} />
          <Route exact path="/" component={Homepage} />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
