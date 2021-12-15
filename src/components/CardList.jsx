import React from 'react';
import Card from './Card'

function CardList(props) {
    const { movies = [] } = props


    return (
        <div className='movies'>
            {movies.length ?
                (movies.map(movie => {
                    return <Card key={movie.imdbID} {...movie} />
                })) : <h4>Nothing found</h4>
            }
        </div>
    );
};

export { CardList };