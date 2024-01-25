import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const AddStockPage = (props) => {

  const handleAdd = async () => {
    const cmpSymbol = document.getElementById("stockSymbol").value;
    const buyPrice = Number(document.getElementById("stockPrice").value);
    const quantity = Number(document.getElementById("stockQuantity").value);

    const data = { cmpSymbol, quantity, buyPrice }

    const res = await fetch("http://localhost:4000/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const resJson = await res.json();

    if (resJson.success === true) {
      props.setNeedReload(props.needReload + 1);
      alert("Added");
    }

    else alert(resJson.message);
  };

  return (
    <div>
      <Card style={{ margin: 20 }} >
        <CardHeader>
          <CardTitle style={{ fontSize: 30 }}>Add Stock</CardTitle>

          <CardDescription style={{ color: "#444444" }}>
            Add new purchase to your portfolio.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="stockSymbol" >Symbol</Label>
            <Input id="stockSymbol" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="stockQuantity" >Quantity</Label>
            <Input id="stockQuantity" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="stockPrice" >Price</Label>
            <Input id="stockPrice" />
          </div>
        </CardContent>

        <CardFooter>
          <Button onClick={handleAdd} >Add</Button>
        </CardFooter>
      </Card>
      {/* <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="symbol" />
        <button type="submit">Search</button>
      </form> */}
    </div>
  )
}

export default AddStockPage;