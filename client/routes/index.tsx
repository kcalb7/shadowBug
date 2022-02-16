import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import { DefaultStatesProvider, MenuProvider, BugsProvider } from '../contexts'
import CustomRoute from './CustomRoute'
// import { AuthProvider } from '../contexts/auth'
import Home from '../pages/home'
import Game from '../pages/game'
import Error from '../pages/error'
import { Menu } from '../components'
import AboutUs from '../pages/aboutUs'
// import AdminLogin from '../pages/login'

class Router extends Component {
  render() {
    return (
      // <AuthProvider>
      <DefaultStatesProvider>
        <MenuProvider>
          <BugsProvider>
            <Menu />
            <Switch>
              <CustomRoute exact path="/" component={Home} />
              <CustomRoute exact path="/sombras" component={Game} />
              <CustomRoute exact path="/quem-somos" component={AboutUs} />
              {/*<CustomRoute exact path="/admin/login" component={AdminLogin} />*/}
              <CustomRoute path="/*" component={Error} />
            </Switch>
          </BugsProvider>
        </MenuProvider>
      </DefaultStatesProvider>
      // </AuthProvider>
    )
  }
}

export default Router
