/* eslint-disable import/extensions */
import React from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './lib/css/Globalstyle';
import theme from './lib/css/Theme';
import App from './page/App';
import { rootReducer } from './redux';

const store = createStore(rootReducer, composeWithDevTools());

render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
