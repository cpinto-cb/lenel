import 'antd/dist/antd.css'
import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

import AppOverviewContainer from "./components/AppOverview/AppOverviewContainer";

function App() {
  return (
      <Provider store={store}>
        <AppOverviewContainer />
      </Provider>
  );

}

export default App;
