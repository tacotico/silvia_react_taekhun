import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from '@styles/GlobalStyles';
import theme from '@styles/theme';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <RecoilRoot>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </RecoilRoot>,
);
