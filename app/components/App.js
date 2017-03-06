import React from 'react';

import Header from '../components/Header'
import Footer from '../components/Footer'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


export default function App ({ children }) {
    return (
      <MuiThemeProvider>
      <div className="container-fluid">
        <Header />
        <div>
          { children }
        </div>
        <Footer />
      </div>
      </MuiThemeProvider>
    )
}
