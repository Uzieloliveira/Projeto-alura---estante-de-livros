import Input from '../Input'
import styled from 'styled-components';
import { useState } from 'react';
import livros from './dadosPesquisa'

const PesquisaContainer = styled.section `
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
        </PesquisaContainer>
    )
}

export default Pesquisa;