import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Home = () => {
    return (
        
           <Container>
                <Section title='Modelo S' desc='Solicítalo online para entrega inmediata' backgroundImg='model-s.jpg' leftBtn='Pedido personalizado' rightBtn='Stock'/>
                <Section title='Modelo Y' desc='Solicítalo online para entrega inmediata' backgroundImg='model-y.jpg' leftBtn='Pedido personalizado' rightBtn='Stock'/>
                <Section title='Modelo X' desc='Solicítalo online para entrega inmediata' backgroundImg='model-x.jpg' leftBtn='Pedido personalizado' rightBtn='Stock'/>
                <Section title='Modelo 3' desc='Solicítalo online para entrega inmediata' backgroundImg='model-3.jpg' leftBtn='Pedido personalizado' rightBtn='Stock'/>
                <Section title='Líderes en Energía Solar' desc='Satisfacción garantizada o te devolvemos tu dinero' backgroundImg='solar-panel.jpg' leftBtn='Solicitar ahora' rightBtn='Quiero saber más' /> 
                <Section title='Nuevos Paneles Solares' desc='Nuestros Paneles Solares son los más económicos' backgroundImg='solar-roof.jpg' leftBtn='Solicitar ahora' rightBtn='Quiero saber más'/>
                <Section title='Accesorios' desc='' backgroundImg='accessories.jpg' leftBtn='Ir a la tienda'/>
                </Container>
    );
}

export default Home;

const Container = styled.div`
    height: 100vh;
`
