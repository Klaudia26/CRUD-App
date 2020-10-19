import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import { useStore } from './redux/store';
import Main from './components/Main';

const App: FC = () => {
  return (
    <Provider store={useStore(undefined)}>
      <GlobalStyle />
      <Main />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
