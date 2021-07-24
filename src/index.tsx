import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { LocalizationProvider } from '@material-ui/pickers';

import MomentUtils from '@material-ui/pickers/adapter/moment';

function RootApp() {

  return (
    <LocalizationProvider dateAdapter={MomentUtils}>
      <App />
    </LocalizationProvider>
  );
}

render(<RootApp />, document.getElementById('root'));
