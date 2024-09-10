import React, { useContext } from "react";
import PropTypes from 'prop-types';
import {Button, Card} from "react-bootstrap";
import { CartContext } from "../context/CartContext";


const CardPizza = ({desc = null, name, price, ingredients = [], img, isHome, id, }) => {
  const { addToCart } = useContext(CartContext);
  const createCart = (pizzaId, pizzaName, pizzaImg, pizzaPrice) => {
    const newElementCart = {pizzaId, pizzaName, pizzaImg, pizzaPrice, quantity: 1, };
    addToCart(newElementCart);
  };

  return (
    <Card className="border border-dark">
      <Card.Img  variant="top" src={img}/>      
      <Card.Body>          
        <Card.Title className="text-center">
          <h5>{name}</h5> 
          <h6>{desc}</h6>
        </Card.Title> 
          <hr/>
            <ul>
              {ingredients.map((ingredient) => (
              <li key={ingredient}>🍕 {ingredient}</li>))}
            </ul>
            <hr/>
        <Card.Text className="text-center">
          <strong>Precio: </strong>${price}
        </Card.Text>           
        <div className="d-flex justify-content-around" >
          <Button variant="outline-dark btn">Ver más</Button>
          <Button  variant="dark" onClick={() => createCart(id, name, img, price)}>Añadir 🛒</Button> 
        </div>
      </Card.Body>
    </Card>  
  );
}   

export default CardPizza;

CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
};

