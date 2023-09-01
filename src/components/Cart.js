import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    // dispatch romove action
    dispatch(remove(id));
  }

    // Create cards component
    const cards = products.map(product => {
      return (
        <div className="col-md-12 text-center" style={{ marginBottom: "10px" }}>
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
              <Button variant="danger" onClick={() => removeFromCart(product.id)}>
                remove item
              </Button>
            </Card.Footer>
          </Card>
        </div>
      )
    })

  return (
    <>
      <div className="row">
        { cards }
      </div>
    </>
  );
}
 
export default Cart;