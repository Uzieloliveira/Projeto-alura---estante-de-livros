import Input from '../Input';
import styled from 'styled-components';
import { useState } from 'react';
import livros from './dadosPesquisa';

const PesquisaContainer = styled.section `
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50%;
    font-family: arial;
`
const Titulo = styled.h2 `
    font-size: 36px;    
`
const Subtitulo = styled.h3 `
    font-size: 15px;
    margin-bottom: 50px;
`
const Resultado = styled.div `
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    margin-top: 50px;
    padding-left: 70%;
    cursor: pointer;
   

    img{
        height: 100%;
        margin-right: 20px;
    }

    &:hover{
        border: solid 1px #fff;
    }
`



function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]) 

    console.log(livrosPesquisados)
    return(
        <PesquisaContainer>
            <Titulo> Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre o seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            {livrosPesquisados.map(livro => (
                    <Resultado>
                        <img src= {livro.src}/>
                        <p> {livro.nome} </p>
                    </Resultado>
            ))}
        </PesquisaContainer>
        
    )
}

export default Pesquisa;