import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Counter from './Counter.jsx';

describe('Smoke tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Counter/>,
      div
    );
  });
})

describe('DOM tests', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Counter min={2} max={11}/>,
    div
  );

  it('renders one span', () => {
    expect(div.querySelectorAll('span').length).toEqual(1);
  });

  it('renders min value', () => {
    expect(div.querySelectorAll('span')[0].innerHTML).toEqual('2');
  });

  it('renders button', () => {
    expect(div.querySelectorAll('button').length).toEqual(2);
  });
})
