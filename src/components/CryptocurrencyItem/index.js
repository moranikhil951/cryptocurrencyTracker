// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {eachOne} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = eachOne

  return (
    <li className="CryptocurrencyItem-container">
      <div className="img-name-flex">
        <img className="imageUrl" src={currencyLogo} alt={currencyName} />
        <p className="currencyName">{currencyName}</p>
      </div>
      <div className="usd-euro-values">
        <p className="usdValue">{usdValue}</p>
        <p className="euroValue">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
