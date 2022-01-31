import React from 'react';
import styled from 'styled-components';

const Section = () => {
    return (
       
       <Container>
           
           <ItemText>
           <h1>Modelo S</h1>
           <p>Solicítalo online para entrega inmediata</p>
           </ItemText>
           
            <BottomButtons>
                <Buttons>
                    <LeftButton>
                        Custom Order
                    </LeftButton>
                    <RightButton>
                        Existing Inventory
                    </RightButton>
                </Buttons>
                <DownArrow src='/images/down-arrow.svg' />
           </BottomButtons>

       </Container>

    );
}

export default Section;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-size-: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    `

    const ItemText = styled.div`
        padding-top: 15vh;
        text-align: center;
    `

    const Buttons = styled.div`
    display: flex;
    margin-bottom: 30px;
    justify-content: center;
    

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;

    }

    `

    const LeftButton = styled.div`
        background-color: rgba(23, 26, 32, 0.8);
        height: 40px;
        width: 256px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100px;
        opacity: 0.85;
        text-transform: uppercase;
        font-size: 12px;
        cursor: pointer;
        margin: 8px; 
    `

    const RightButton = styled(LeftButton)`
        background: white;
        opacity: 0.65;
        color: black;
        
    `

    const DownArrow = styled.img`
        margin-top: 20px;
        height: 40px;
        animation: animateDown infinite 1.5s;
        overflow-x: hidden;
    `

    const BottomButtons = styled.div`
 
    `