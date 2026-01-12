import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';
import styled from 'styled-components';

const Icones = styled.ul`
    display: flex;
    align-items: center;
    gap: 30px;
`
const Icone = styled.li`
    width: 35px;
    margin-left: 5px;

`
const icones = [perfil, sacola]
 
 export default function IconesHeader(){
    return (
        <Icones>
            {icones.map((icone)=>(
                <Icone><img src={icone} alt=''></img></Icone>
            ))}
        </Icones>
    )
 }
 
 