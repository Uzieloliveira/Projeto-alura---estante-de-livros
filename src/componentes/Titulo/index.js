import styled from "styled-components"

const Titulo = styled.h2 `
    font-family: arial;
    color: ${props => props.cor || '#03295a'};
    font-size: ${props => props.tamanhoFonte || '18px;'};
    text-align: ${props => props.alinhamento || 'center'};
    width: 100%;

`

export default Titulo;