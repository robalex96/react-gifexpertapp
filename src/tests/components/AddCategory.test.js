import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('AddCategory component', () => {
    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('Render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Submit should not be excetuted', () => {
        const form = wrapper.find('form');
        form.simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Submit should be excetuted setCategories and input clean', () => {
        const value = 'Prueba';

        const input = wrapper.find('input');
        input.simulate('change', { target: {value}});
        
        const form = wrapper.find('form');
        form.simulate('submit', {preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(input.prop('value')).toBe('');
    });    
});