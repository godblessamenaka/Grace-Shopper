import React from 'react'
import Search from '../components/Search'

function LandingPage (props) {

  return (
    <div>
      <Search handleChange={props.handleChange} inputValue={props.inputValue} />
    </div>
  )
}

export default LandingPage
