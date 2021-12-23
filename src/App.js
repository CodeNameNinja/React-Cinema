import React from 'react';
import { Provider } from 'react-redux';

import './App.scss';
import store from './redux/store';
import Header from './components/header/Header';
function App() {
  return (
    <Provider store={store}>
      <Header> </Header>
      <div className="app">Redux</div>
    </Provider>
  );
}

export default App;
