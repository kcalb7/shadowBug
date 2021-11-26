import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import { Container } from '../components'
// import PropTypes from 'prop-types';
// import { Context } from '../../Context/authContext';
// import { CustomModal } from '../../components/Loading/styles';
// import { NavbarMobile as NavbarAdmin, NavbarApp, FooterApp } from '../../components'

// const CustomRoute = ({ isPrivate, ...rest }) => {
const CustomRoute = ({ ...rest }) => {
  // const { auth, loading, checkLogin } = useContext(Context);

  // if (loading) return <CustomModal />;
  // if (isPrivate) checkLogin();
  // if (isPrivate && !auth) return (window.location.href = '/admin/login');

  const showAppNavbar = () =>
    !window.location.pathname.includes('login') && !rest.path.includes('/admin')
  // const showAdminNavbar = () =>
  //   auth && !window.location.pathname.includes('login') && rest.path.includes('/admin');

  return (
    // <>
    //   {showAppNavbar() && <NavbarApp />}
    //   {showAdminNavbar() && <NavbarAdmin />}
    <Container>
      <Route exact={rest.exact} path={rest.path} component={rest.component} />
    </Container>
    //  <FooterApp />
    // </>
  )
}

// CustomRoute.propTypes = { isPrivate: PropTypes.bool };

export default CustomRoute
