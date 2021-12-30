import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import { DefaultStatesProvider } from '../contexts/defaultStates'
import CustomRoute from './CustomRoute'
// import { AuthProvider } from '../contexts/auth'
import Home from '../pages/home'
import Error from '../pages/error'
// import AdminLogin from '../pages/login'

class Router extends Component {
  render() {
    return (
      // <AuthProvider>
      <DefaultStatesProvider>
        <Switch>
          <CustomRoute exact path="/" component={Home} />
          {/*<CustomRoute exact path="/admin/login" component={AdminLogin} />*/}
          <CustomRoute path="/*" component={Error} />
        </Switch>
      </DefaultStatesProvider>
      // </AuthProvider>
    )
  }
}

export default Router
