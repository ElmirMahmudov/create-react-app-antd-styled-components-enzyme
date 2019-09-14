import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

const app = shallow(<App />);

it('contains Button element with `Hello world Button`', () => {
    expect(app.find('.myButton').props().children).toEqual(`Hello world Button`);
});