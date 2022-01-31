import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Home = () => {
    return (
        <div>
            <Container>
                <Section title='Modelo S' desc='Solicítalo online para entrega inmediata' backgroundImg='model-s.jpg' leftBtn='Pedido personalizado' rightBtn='Stock'/>
                <Section title='Modelo Y' desc='Solicítalo online para entrega inmediata' backgroundImg='model-y.jpg' leftBtn='Pedido personalizado' rightBtn='Stock'/>
                <Section title='Modelo X' desc='Solicítalo online para entrega inmediata' backgroundImg='model-x.jpg' leftBtn='Pedido personalizado' rightBtn='Stock'/>
                <Section title='Modelo 3' desc='Solicítalo online para entrega inmediata' backgroundImg='model-3.jpg' leftBtn='Pedido personalizado' rightBtn='Stock'/>
            </Container>
        </div>
    );
}

export default Home;

const Container = styled.div`
    height: 100vh;
`
