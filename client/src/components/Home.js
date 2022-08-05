import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import routes from '../routers/routes';

export default function Home() {
  return (
    <Container>
      <Row className='mt-5'>
        <Col xs={{ span: 12 }} md={{ span: 5 }} lg={{span: 5}} className="mb-5 pt-md-5">
          <h2>Diseñado para nuestra familia,</h2>
          <h3>construido para crecer.</h3>
          <p>Como colaborador de Royal Resta, aquí podras llevar a cabo tus tareas administrativas de acuerdo a tu rol!</p>
          <div>
            Si tienes dudas consulta el apartado de <Link to={routes.help}>ayuda</Link>, de lo contrario <Button as={Link} to={routes.login} className='btn btn-warning text-black mt-1'>inicia sesión</Button>
          </div>
        </Col>
        <Col className='img-fluid' md={{ span: 7 }} lg={{span: 7}}  >
          <img src="/img/home/home-pic.jpg" alt="Comida-Royal-Resta-Home" style={{width: '100%'}}/>
        </Col>
      </Row>
    </Container>
  )
}
