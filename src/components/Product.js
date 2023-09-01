import {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

export default function Product() {
  const dispatch = useDispatch();

  // Save Api data in this state
  const [products, setProducts] = useState([]);

  // Api fetch with useEffect
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  const addToCart = (product) => {
    // dispatch an add action 
    dispatch(add(product));
  }

  // Create cards component
  const cards = products.map(product => {
    return (
      <div className="col-md-3 text-center" style={{ marginBottom: "10px" }}>
        <Card key={product.id} className="h-100">
          <div className="text-center">
            <Card.Img
              variant="top" src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>price: ${product.price}</Card.Text>
          </Card.Body>

          <Card.Footer style={{ backgroundColor: "white" }}>
            <Button variant="primary" onClick={() => addToCart(product)}>
              Add to cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    )
  })

  return (
    <div>
      <h1>Product dashboard</h1>
      <div className="row">
        {cards}
      </div>
    </div>
  )
}