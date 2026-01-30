import styled from "styled-components";
import Titulo from '../Titulo/index'

const Card = styled.div `
    max-height: 250px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-top: 20px;
    background-color: #b0cde4;
    border-radius: 10px;
    box-shadow: 2px 5px 5px #48587a;
 `
const Imagem = styled.img`
    height: 150px;
`

const Botao = styled.button `
    border: none;
    padding: 10px;
    font-size: 1rem;
    cursor: pointer;
    background-color: #0e3050;
    color: #FFF;
`
const ImagemContainer = styled.div`
    display: flex;
    flex-direction: column;
`


function CardRecomenda ({titulo, subtitulo, descricao, imagem}){
    return (
        <Card>
            <div>
                <Titulo alinhamento='left' tamanhoFonte='20px' cor='#076f8f'>{titulo}</Titulo>
                <h4>{subtitulo}</h4>
                <p>{descricao}</p>
            </div>
            <ImagemContainer>
                <Imagem src= {imagem}/>
                <Botao>Saiba mais</Botao>
            </ImagemContainer>
            
        </Card>
    )
}

export default CardRecomenda;