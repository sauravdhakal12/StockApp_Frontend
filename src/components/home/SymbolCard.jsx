import PropTypes from "prop-types";

const SymbolCard = (props) => {
  return (
    <div style={{ padding: 20, margin: 20 }}>
      <h2 style={{ textDecoration: "underline" }}>{props.userP.cmpSymbol}</h2>
      <p><b>Quantity: </b> {props.userP.quantity}</p>
      <p><b>Price: </b> {props.userP.buyPrice}</p>
      <p><b>Date: </b> {props.userP.date}</p>
    </div>
  )
}

SymbolCard.propTypes = {
  userP: PropTypes.object.isRequired,
}

export default SymbolCard;