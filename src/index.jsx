import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import App from './app';
import { store } from './store';

const theme = createTheme({
  typography: {
    h2: {
      fontFamily: '"Orbitron"',
      color: '#FFFFFF',
    },
    h3: {
      fontFamily: '"Orbitron"',
      color: '#BE45FF',
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
