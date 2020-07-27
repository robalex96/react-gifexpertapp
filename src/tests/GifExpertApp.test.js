import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('GifExpertApp', () => {
    test('Render correctly ', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Render two categories', () => {
        const categoriesDefault = ['One Punch', 'Goku'];        
        const wrapper = shallow(<GifExpertApp categoriesDefault={categoriesDefault} />);
        expect(wrapper.find('GifGrid').length).toBe(2);
    });
    
});