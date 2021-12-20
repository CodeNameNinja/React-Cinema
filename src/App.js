import React from 'react';
import { Provider } from 'react-redux';

import './App.scss';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="app">Redux</div>
    </Provider>
  );
}

export default App;
