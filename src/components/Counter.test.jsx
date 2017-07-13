import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Counter from './Counter.jsx';
import { mount } from 'enzyme';

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

describe("Behavior tests", () => {
  let fixture;

  beforeEach(() => {
    fixture = mount(
      <Counter min={2} max={11}/>
    );
  });

  it('dec by 1 on minus click', () => {
    fixture.setState({count: 5});
    const minusBtn = fixture.find('button').at(0);
    minusBtn.simulate('click');
    expect(fixture.state().count).toBe(4);
  });

  it('inc by 1 on plus click', () => {
    const plusBtn = fixture.find('button').at(1);
    plusBtn.simulate('click');
    expect(fixture.state().count).toBe(3);
  });

  it('does not go below min', () => {
    fixture.setState({count: 2});
    const minusBtn = fixture.find('button').at(0);
    minusBtn.simulate('click');
    expect(fixture.state().count).toBe(2);
  });

  it('does not go above max', () => {
    fixture.setState({count: 11});
    const plusBtn = fixture.find('button').at(1);
    plusBtn.simulate('click');
    expect(fixture.state().count).toBe(11);
  });
})
