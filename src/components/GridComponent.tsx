import React from 'react';
import {Grid} from "@giphy/react-components";
import {GifsResult} from "@giphy/js-fetch-api";

interface GridComponentProps {
    isCat: boolean,
    searchDogs: (offset: number) =>  Promise<GifsResult>
    searchCats: (offset: number) =>  Promise<GifsResult>
}

const GridComponent: React.FC<GridComponentProps> = (
                           props
                       ) => {
    const { isCat, searchDogs, searchCats } = props

    return (

        <>
            {isCat ? <Grid
                        fetchGifs= { searchCats }
                        width={500}
                        gutter={6}
                        columns={3}
                    /> :
                <Grid
                fetchGifs= { searchDogs }
                width={500}
                gutter={6}
                columns={3}
            />}
            </>
    );
};

export default GridComponent;