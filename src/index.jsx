import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import App from './app';
import './assets/styles/index.css';
import { store } from './store';

let theme = createTheme({
  typography: {
    h2: {
      fontFamily: '"Orbitron"',
      color: '#FFFFFF',
    },
    h3: {
      fontFamily: '"Orbitron"',
      color: '#BE45FF',
    },
    h4: {
      fontFamily: '"Orbitron"',
      color: '#FFFFFF',
      transition: 'font-size .5s ease',
      '&:hover': {
        color: '#BE45FF',
        fontSize: '2.6rem',
      },
    },
  },
});
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
