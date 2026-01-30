import livros from './dadosUltimosLancamentos'
import styled from 'styled-components';
import Titulo from '../Titulo';
import CardRecomenda from '../CardRecomenda';
import ImagemLivro from '../../img/livro2.png'

const LancamentosContainer = styled.section `

    border-radius: 10px;
    margin: 10%;
    padding: 2%;
    background-color: #4783a9;
`

const LivrosContainer = styled.div`
    display: flex;
    height: 80%;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;


    img{
        height: 200px;
    }
`


function UltimosLancamento(){
    return (
        <LancamentosContainer>
            <Titulo 
                cor="#f8f9fa" 
                tamanhoFonte="36px" 
            >ÚLTIMOS LANÇAMENTOS</Titulo>
            <LivrosContainer>
                {livros.map( livro => (
                    <img src= {livro.src}/>
                ))}
            </LivrosContainer>
            <CardRecomenda
                titulo='Talvez você se interesse por...'
                subtitulo='Angular 11'
                descricao='Construindo uma aplicação com a plataforma google'
                imagem={ImagemLivro}
            />
        </LancamentosContainer>
    )
}

export default UltimosLancamento;