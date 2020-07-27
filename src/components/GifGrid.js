import React, { Fragment } from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {    
    const {data:gifs, loading} = useFetchGifs(category);

    return (
        <Fragment>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p>Loading...</p>}
            <div className='card-grid'>
                {
                    gifs.map(gif =>
                        (
                        <GifGridItem 
                            key={gif.id}
                            {...gif}
                        />
                        )
                    )
                }
            </div>
        </Fragment>
    )
};
