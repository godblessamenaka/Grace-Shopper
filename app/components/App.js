 import React from 'react';

import Header from '../components/Header'
import Footer from '../components/Footer'


export default function App ({ children }) {
    return (

      <div className="container-fluid" style={{backgroundColor: '#262532'}} >
        <Header style={{backgroundColor: '#262532'}} />
        <div>
          { children }
        </div>
        <Footer />
      </div>

    )
}
