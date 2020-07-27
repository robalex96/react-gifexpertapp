import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('useFetchGifs test hook ', () => {
    test('useFetchGifs should have a initial state ', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Goku'));
        const {data:gifs, loading} = result.current;
        await waitForNextUpdate();

        expect(gifs).toEqual([]);
        expect(loading).toBe(true);
    });

    test('useFetchGifs should have a gifs array and loading in false ', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Goku'));
        await waitForNextUpdate();
        const {data:gifs, loading} = result.current;

        expect(gifs.length).toBe(10);
        expect(loading).toBe(false);
    });    
});