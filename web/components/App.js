import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import '../css/styles.css';

const App = () => {
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
    </div>
  );
};

module.exports = {
  reaxt_server_render(params, render) { // server side call, should call render(ReactComp)
    render(<App/>)
  },
  reaxt_client_render(initialProps, render) { // initial client side call, should call render(ReactComp)
    render(<App/>)
  }
}
