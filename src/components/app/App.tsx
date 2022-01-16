import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/themes/default';
import GlobalStyles from '../assets/styles/global';
import { Header } from '../Header';
import { RoutesContainer } from '../../Routes';
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <RoutesContainer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
