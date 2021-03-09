import React, { useState } from 'react'
import Card from "./Card";

function SearchMovies() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const SearchMovies = async (event) => {
        event.preventDefault();
        try {
            const URL = `https://api.themoviedb.org/3/search/movie?api_key=08b03a00270ce3150cb611ee84d4cc23&language=en-US&query=${query}&page=1&include_adult=false`;
            const promise = await fetch(URL);
            const data = await promise.json();
            setMovies(data.results);
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <form action="#" className="form" method="get" onSubmit={SearchMovies}>
                <label htmlFor="query" className="label">Search For Movie</label>
                <input type="text" value={query} name="query" placeholder="movie name" className="input" onChange={(e) => setQuery(e.target.value)} />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.length > 0 && movies.filter((movie) => movie.poster_path)
                    .map(movie => (
                        <Card movie={movie}></Card>
                    ))}
            </div>
        </>
    )
}

export default SearchMovies
