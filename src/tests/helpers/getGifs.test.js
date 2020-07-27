import { getGifs } from '../../helpers/getGifs'

describe('getGifts function', () => {
    test('getGifs should have 10 elements ', async () => {
        const gifs = await getGifs('Goku');
        expect(gifs.length).toBe(10);
    });

    test('getGifs should have 0 elements wiht category empty', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });    
});