import React from 'react'

/* Components */
import Footer from './footer'
import Header from './header'

/* MUI */
import CssBaseline from '@mui/material/CssBaseline'

function Layout({ children }) {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Header/>
      { children }
      <Footer/>
    </React.Fragment>
  );
}

export default Layout;
