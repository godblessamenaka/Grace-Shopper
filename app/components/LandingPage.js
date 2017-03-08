import React, { Component } from 'react'
import Search from '../components/Search'
import MultipleProductsContainer from '../containers/MultipleProductsContainer'


class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: ''}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    const inputValue = evt.target.value
    this.setState({ inputValue })
  }

  render() {
    const inputValue = this.state.inputValue
    const filteredProducts = this.props.products.filter(product => product.name.match(inputValue))

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
          <img src="/images/potionbg.png" alt="" className="center-block" />
          </div>
        </div>
        <MultipleProductsContainer />
        <Search handleChange={this.handleChange} inputValue={inputValue} />
      </div>
    )
  }
}

export default LandingPage
