import React from 'react';
import ReactDOM from 'react-dom';

//ROUTES
import RouterFile from './routes';

import { Provider } from "react-redux";
import { store } from "./state/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterFile />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
