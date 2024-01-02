import PropTypes from "prop-types";
import { removeSecurity } from "../../utils/serverRequest";

const SymbolCard = (props) => {

  const handleDelete = async (event) => {
    event.preventDefault();

    const confirmDelete = confirm("Are you sure");

    if (confirmDelete) {

      const res = await removeSecurity(props.userP.id);

      if (res.success) {
        props.removeSecurity(props.userP.id);
        alert("Item deleted");
      }
      else {
        alert("Item not deleted");
      }
    }
  };

  return (
    <div style={{ padding: 20, margin: 20 }}>
      <h2 style={{ textDecoration: "underline" }}>{props.userP.cmpSymbol}</h2>
      <p><b>Quantity: </b> {props.userP.quantity}</p>
      <p><b>Price: </b> {props.userP.buyPrice}</p>
      <p><b>Date: </b> {props.userP.date}</p>
      <button onClick={handleDelete} > Delete</button>
    </div >
  )
}

SymbolCard.propTypes = {
  userP: PropTypes.object.isRequired,
  removeSecurity: PropTypes.func,
}

export default SymbolCard;