import React from 'react'
import { useLocation } from 'react-router-dom';
import useAuth from '../auth/useAuth'
//import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
//import routes from '../routers/routes';

const userCredentials = {};

export default function Login() {

  const location = useLocation();
  const { login } = useAuth();

  return (
    <Row style={{ backgroundImage: `url("/img/login/login-bg.jpg")`, backgroundSize: 'cover' }} className='mw-100 mh-100'>
      <Col className='d-flex justify-content-center my-5 pb-5'>


        <Card style={{ width: '500px' }} variant="dark" bg="dark" className="mb-2" >
          <Card.Header className='d-flex justify-content-center  text-warning'><h1>Royal Resta</h1></Card.Header>
          <div className='d-flex justify-content-center  text-warning mt-2'>
            <Card.Img variant="top" src="/img/login/user-icon.png" alt="user-icon" style={{ width: '150px', height: '150px' }} />
          </div>
          <Card.Body>
            <Card.Title className='d-flex justify-content-center text-white'><hr /></Card.Title>
            <Card.Text>
              <div className='mx-2'>
                <input className='form-control d-flex justify-content-center text-white mb-3' type="text" id="fEmail" placeholder="Ingrese su email" />
                <input className='form-control d-flex justify-content-center text-white mb-3' type="password" id="fPassword" placeholder="Ingrese su contraseña" />
              </div>
              <div className='d-flex justify-content-center text-white'>
                <button className='d-flex justify-content-center btn btn-warning text-black' onClick={() => login(userCredentials, location.state?.from)}>Iniciar Sesión</button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>


      </Col>
    </Row>
  )
}
