import styled from 'styled-components';
const textoOpcoes = ['FAVORITOS', 'CATEGORIAS', 'MINHA ESTANTE'];

const Opcoes = styled.ul`
    display: flex;
    padding: 10px;
`
const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: 0 10px;
    cursor: pointer;
    min-width: 120px;
    font-family: Arial, Helvetica, sans-serif;
`
function OpcoesHeader(){
    return (
        <Opcoes>
            {textoOpcoes.map((texto)=>(
                <Opcao><p>{texto}</p></Opcao>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader;