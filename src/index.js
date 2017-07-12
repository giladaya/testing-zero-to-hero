import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <Counter max={5}/>,
  document.getElementById('root')
);
