import React from 'react';
import { GifGridItem} from '../../components/GifGridItem'
import { shallow } from 'enzyme';

const title = 'Titulo prueba';
const url = 'https://localhost/prueba.jpg';

const wrapper = shallow(<GifGridItem title={title} url={url} />);

describe('GifGridItem Component', () => {
    test('Render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Title in p tag', () => {
       const p = wrapper.find('p'); 
       expect(p.text().trim()).toBe(title);
    });

    test('Img should have url and alt', () => {
        const {src, alt} = wrapper.find('img').props();
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Div should have class animation fadeIn', () => {
        const {className} = wrapper.find('div').props();
        expect(className.includes('animate__fadeIn')).toBe(true);
    });    
});