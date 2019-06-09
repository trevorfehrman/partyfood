import React, { Fragment, Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Login from './components/Login';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d50000'
    },
    secondary: {
      main: '#263238'
    }
  },
  typography: {
    fontFamily: ['"Quicksand"', 'sans-serif'].join(','),
    htmlFontSize: 10
    // fontSize: 16
  }
});

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Login />
        </MuiThemeProvider>
      </Fragment>
    );
  }
}

export default App;
