import LandingPage from '../components/LandingPage'
import MultipleProducts from '../components/MultipleProducts'
import React, { Component } from 'react';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  const products = state.products

  return {
    products: products.allProducts
  }
}

class LandingPageContainer extends Component {
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
        <img src="" alt="" />
        <LandingPage handleChange={this.handleChange} inputValue={inputValue} />
        <MultipleProducts products={filteredProducts} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(LandingPageContainer)

