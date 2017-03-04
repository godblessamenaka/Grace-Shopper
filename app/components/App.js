import React from 'react';

import Header from '../Components/Header'
//import Footer from '../components/Footer'

export default function App ({ children }) {
    return (
      <div className="container-fluid">
        <div>
          <Header />
        </div>
        <div>
          { children }
        </div>
        
      </div>
    )
}