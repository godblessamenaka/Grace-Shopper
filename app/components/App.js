import React from 'react';

import Header from '../Components/Header'
import Footer from '../components/Footer'

export default function App ({ children }) {
    return (
      <div className="container-fluid">
        <Header />
        <div>
          { children }
        </div>
        <Footer />
      </div>
    )
}
