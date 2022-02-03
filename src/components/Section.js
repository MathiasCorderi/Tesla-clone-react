import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal'

const Section = ({title, desc, backgroundImg, leftBtn, rightBtn}) => {
    

    return (
       
       <Container bgImage={backgroundImg}>
          <Fade bottom>
                <ItemText>
                    <h1>{ title }</h1>
                    <p>{ desc }</p>
                </ItemText>
           </Fade> 
            <BottomButtons>
                <Buttons>
                    <LeftButton>
                        {leftBtn}
                    </LeftButton>
                    
                    { rightBtn && 
                        <RightButton>
                            {rightBtn}
                        </RightButton> 
                    }
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
    background-image: ${props => `url('/images/${props.bgImage}')`};
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