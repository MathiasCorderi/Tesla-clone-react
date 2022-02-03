import React, { useState } from 'react';
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container>
            <a><img src='/images/logo.svg' /></a>

            <Menu>
                <a href='#'>Modelo S</a>
                <a href='#'>Modelo X</a>
                <a href='#'>Modelo Y</a>
                <a href='#'>Modelo 3</a>
            </Menu>

            <RightMenu>
                <a href='#'>Tienda</a>
                <a href='#'>Mi cuenta</a>
                <CustomMenu onClick={() => setBurgerStatus(true)}>

                </CustomMenu>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseContainer>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseContainer>
                <li><a href='#'>Stock</a></li>
                <li><a href='#'>Stock usados</a></li>
                <li><a href='#'>Intercambio</a></li>
                <li><a href='#'>Cybertruck</a></li>
                <li><a href='#'>Roadster</a></li>
                <li><a href='#'>Semi</a></li>
                <li><a href='#'>Stock</a></li>
                <li><a href='#'>Stock</a></li>
            </BurgerNav>
        </Container>
    );
}

export default Header;

const Container = styled.div`
    z-index: 10;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
    }

    @media(max-width: 768px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight: 600;
        }
    }

`

const CloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
