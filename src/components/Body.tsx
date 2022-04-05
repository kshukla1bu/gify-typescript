import React, {useState} from 'react';
import {GiphyFetch} from "@giphy/js-fetch-api";

import '../styles/Body.css'
import GridComponent from "./GridComponent";

const Body = () => {
    const [isCat, setIsCat] = useState<boolean>(false)

    const giphyFetch = new GiphyFetch('XMm0wxI5dKKXH3W1WTNTM5js9hNcU0w3');

    const searchDogs = (offset: number) => giphyFetch.search("dogs", { offset, limit: 10 })
    const searchCats = (offset: number) => giphyFetch.search("cats", { offset, limit: 10 })

    return (
        <>
            <div className={'bodyTitle'}>
                <h2>Showing {isCat ? 'Cats' : 'Dogs'}</h2>
            </div>
            <div className={'buttonDiv'}>
                <button onClick={() => setIsCat(true)}>Cats</button> {'or '}
                <button onClick={() => setIsCat(false)}>Dogs</button>
            </div>
            <div className={'gridDiv'}>
                <GridComponent
                    isCat={isCat}
                    searchDogs={searchDogs}
                    searchCats={searchCats}
                />
            </div>
        </>
    );
};

export default Body;