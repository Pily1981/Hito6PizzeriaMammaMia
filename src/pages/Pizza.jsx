import { useEffect, useState} from "react"
import {Card, Button, Container, Row, Col } from "react-bootstrap";

function Pizza() {
    const [pizza, setPizza] = useState({});
    
    const getPizza = async () => {
        const resp = await fetch("http://localhost:5000/api/pizzas/p001");
        const dataPizza = await resp.json();
    
        setPizza(dataPizza);
      };
  
    useEffect(() => {
      getPizza();
    }, []); 
  
    return (
        <>
        <Container className="mt-4">
            <Row className="justify-content-center">        
                <Col md={4} className="mb-4 d-flex">
                    <Card className="border border-dark">
                    <Card.Img  variant="top" src={pizza.img}/>      
                        <Card.Body>          
                            <Card.Title className="text-center">
                                <h5>{pizza.name}</h5> 
                                <h6>{pizza.desc}</h6></Card.Title> 
                                <hr/>
                                <ul>
                                    {pizza.ingredients?.map((ingredient) => (
                                    <li key={ingredient}>🍕 {ingredient}</li>))}
                                </ul>
                                <hr/>
                                <Card.Text className="text-center">
                                <strong>Precio: </strong>${pizza.price}</Card.Text>           
                                <div className="d-flex justify-content-around" >
                                    <Button variant="outline-dark btn">Ver más</Button>
                                    <Button className="btn btn-dark">Añadir 🛒</Button> 
                                </div>
                        </Card.Body>
                    </Card>   
                </Col>          
            </Row>
        </Container>     
        </>
     )
    }

export default Pizza