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
    console.log(filteredProducts);

    return (
      <div>
        <Search handleChange={this.handleChange} inputValue={inputValue} />
        <img src="/images/potionbg.png" alt="" />
        <MultipleProductsContainer />
      </div>
    )
  }
}

export default LandingPage
