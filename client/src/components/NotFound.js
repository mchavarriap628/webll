import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import routes from '../routers/routes';

export default function NotFound() {
  return (
    <Container>
      <Row className='mt-5'>
        <Col md={{span: 10, offset:1}}>
          <img style={{width: '100%'}} className='mb-5' src="/img/404/error-404.jpg" alt="error-404" />
          <h2>No tienes acceso a este recurso, o la página que has intentado acceder no existe.</h2>
          <p>Inicia sesión o vuelve al <Link to={routes.home} className='text-danger'>inicio</Link></p>
        </Col>
      </Row>
    </Container>
  )
}
