import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles/style.scss'

import Saucepan from './components/common/Saucepan'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Profile from './components/auth/Profile'
import Homepage from './components/common/Homepage'
import RecipesIndex from './components/recipes/RecipesIndex'
import RecipeShow from './components/recipes/RecipeShow'
import RecipeNew from './components/recipes/RecipeNew'
import RecipeEdit from './components/recipes/RecipeEdit'

// fetch('/api/recipes')
// <Saucepan />

const App = () => {
  return(
    <BrowserRouter>
      <main>
        <Saucepan />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/recipes/new" component={RecipeNew}/>
          <Route path="/recipes/:id/edit" component={RecipeEdit} />
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
