import Header from './componentes/Header/'
import styled from 'styled-components'
import Pesquisa from './componentes/Pesquisa/'
import UltimosLancamentos from './componentes/UltimosLancamentos/'

const AppContainer = styled.div`
    min-height: 100vh;
    overflow: hidden;
    height: auto;
    background-image: linear-gradient(90deg,#002f52 35%, #326589 165%);
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa />
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default App;
