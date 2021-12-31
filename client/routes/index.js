import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import { BugsProvider } from '../contexts/bug'
import { DefaultStatesProvider } from '../contexts/defaultStates'
import CustomRoute from './CustomRoute'
// import { AuthProvider } from '../contexts/auth'
import Home from '../pages/home'
import Game from '../pages/game'
import Error from '../pages/error'
// import AdminLogin from '../pages/login'

class Router extends Component {
  render() {
    return (
      // <AuthProvider>
      <DefaultStatesProvider>
        <BugsProvider>
          <Switch>
            <CustomRoute exact path="/" component={Home} />
            <CustomRoute exact path="/sombras" component={Game} />
            {/*<CustomRoute exact path="/admin/login" component={AdminLogin} />*/}
            <CustomRoute path="/*" component={Error} />
          </Switch>
        </BugsProvider>
      </DefaultStatesProvider>
      // </AuthProvider>
    )
  }
}

export default Router
