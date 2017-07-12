import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Counter from './Counter.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Counter/>,
    div
  );
});
