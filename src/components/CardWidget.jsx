import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardWidget = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../../public/img/pantAlgodon.jpg" />
      <Card.Body>
        <Card.Title>Pantalon de hilo</Card.Title>
        <Card.Text>
          Pantalon de hilo de algodón <p>Talles del 0 al 4.</p> $3000
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default CardWidget;