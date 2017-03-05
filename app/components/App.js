import React from 'react';

import Header from '../Components/Header'
import Footer from '../components/Footer'


import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


export default function App ({ children }) {
  injectTapEventPlugin();
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
