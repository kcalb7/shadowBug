import React from 'react'
import { Route } from 'react-router-dom'
import { Body, Header } from '../components'
import Modal from '../components/Modal'
// import { CustomModal } from '../../components/Loading/styles';

// const CustomRoute = ({ isPrivate, ...rest }) => {
const CustomRoute = ({ ...rest }) => {
  // const { auth, loading, checkLogin } = useContext(Context);

  // if (loading) return <CustomModal />;
  // if (isPrivate) checkLogin();
  // if (isPrivate && !auth) return (window.location.href = '/admin/login');

  const showHeader = () =>
    !window.location.pathname.includes('login') && !rest.path.includes('/admin')
  // const showAdminNavbar = () =>
  //   auth && !window.location.pathname.includes('login') && rest.path.includes('/admin');

  return (
    <>
      {showHeader() && <Header />}
      <Body>
        <Modal />
        <Route exact={rest.exact} path={rest.path} component={rest.component} />
      </Body>
    </>
  )
}

export default CustomRoute
