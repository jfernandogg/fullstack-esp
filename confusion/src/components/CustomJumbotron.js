import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './CustomJumbotron.css'; // Archivo CSS para estilos personalizados

const CustomJumbotron = ({ children }) => (
  <div className="custom-jumbotron">
    <Container>
      {children}
    </Container>
  </div>
);

export default CustomJumbotron;
