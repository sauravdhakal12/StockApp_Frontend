import PropTypes from "prop-types";
import "./index.css";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const SymbolCard = (props) => {

  let text = (props.userP.porl > 0) ? "Profit" : "Loss";
  let d = new Date(props.userP.timestamp).toString();
  let a = d.substring(4, 15);

  const handleRemove = async (id) => {
    const res = await fetch("http://localhost:4000/" + id, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      }
    });

    const resJson = await res.json();
    if (resJson.success) {
      props.setNeedReload(props.needReload + 1);
      alert("Deleted");
    }
    else {
      alert(resJson.message);
    }
  }

  return (
    <Card style={{ margin: 20 }} className={props.userP.porl < 0 ? "loss" : "profit"}>
      <CardHeader>
        <CardTitle style={{ fontSize: 25 }}>{props.userP.cmpSymbol}</CardTitle>

        <CardDescription style={{ color: "#444444" }}>
          {a}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-2">
        <div className="space-y-1" style={{ marginLeft: 20 }} >
          <p><b>Quantity: </b> {props.userP.quantity}</p>
          <p><b>Buy Price: </b> {props.userP.buyPrice}</p>
          <p><b>LTP: </b> {(props.userP.ltp).toFixed(2)}</p>
          <p><b>Total {text}: </b> {(props.userP.porl * props.userP.quantity).toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => { handleRemove(props.userP.id) }} >Remove</Button>
      </CardFooter>

    </Card>
  );
}

SymbolCard.propTypes = {
  userP: PropTypes.object.isRequired,
  removeSecurity: PropTypes.func,
  marketOpen: PropTypes.bool,
}

export default SymbolCard;