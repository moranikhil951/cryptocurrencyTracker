// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {crtptoListItem: [], isLoading: true}

  componentDidMount() {
    this.currencyItem()
  }

  currencyItem = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))
    this.setState({crtptoListItem: updatedData, isLoading: false})
  }

  render() {
    const {crtptoListItem, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="cryptocurrency-list-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>

        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          className="imageCurrency"
          alt="cryptocurrency"
        />
        <ul className="unOrdered-list">
          <div className="head-flex">
            <h1 className="coin-heading">Coin Type</h1>
            <div className="usd-euro-flex">
              <h1 className="coin-heading-usd">USD</h1>
              <h1 className="coin-heading-euro">EURO</h1>
            </div>
          </div>
          {crtptoListItem.map(item => (
            <CryptocurrencyItem eachOne={item} key={item.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
