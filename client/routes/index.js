import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import CustomRoute from './CustomRoute'
// import { AuthProvider } from '../contexts/auth'
import Home from '../pages/home'
import Error from '../pages/error'
// import AdminLogin from '../pages/login'

class Router extends Component {
  render() {
    return (
      // <AuthProvider>
      <Switch>
        <CustomRoute exact path="/" component={Home} />

        {/*<CustomRoute exact path="/admin/login" component={AdminLogin} />*/}
        {/*<CustomRoute isPrivate exact path="/admin" component={AdminNews} />*/}
        <CustomRoute path="/*" component={Error} />
      </Switch>
      // </AuthProvider>
    )
  }
}

export default Router
