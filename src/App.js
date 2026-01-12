import Header from './componentes/Header/'
import styled from 'styled-components'

const AppContainer = styled.div`

    height: 100vh;
    background-image: linear-gradient(90deg,#002f52 35%, #326589 165%);

`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa />
    </AppContainer>
  );
}

export default App;
