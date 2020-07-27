import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('GifGrid component', () => {
    test('Render first time Loading...', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid />);
        expect(wrapper.find('p').exists()).toBe(true);
        expect(wrapper.find('GifGridItem').exists()).toBe(false);
    });

    test('Render items when loading items for useFecthGifs', () => {
        const gifs = [{
            id: 'ABC',
            title: 'Prueba',
            url: 'https://localhost/prueba.jpg'
        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid />);
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });    
});