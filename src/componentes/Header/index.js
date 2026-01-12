import Logo from '../Logo/index.js';
import OpcoesHeader from '../OpcoesHeader/index.js';
import Icones from '../IconesHeader/index.js'
import styled from 'styled-components';

const AppHeader = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Header(){
    return (
        <AppHeader>
            <Logo/>
            <OpcoesHeader/>
            <Icones/>
        </AppHeader>
    )
}


export default Header;