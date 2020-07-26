import React, { Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    return (
        <Fragment>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            {
                categories.map((category) =>  
                    <GifGrid
                        key={category}
                        category={category}
                    />
                )
            }
        </Fragment>
    )
}