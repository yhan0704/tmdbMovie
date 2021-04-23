import React from 'react'

export default function Movies(props) {
    const {movie} = props
    const apiImageAddress="http://image.tmdb.org/t/p/original/"

    return (
        <div>
            {movie.original_title}
            {
                movie.poster_path === null ? null :   <img src={apiImageAddress + movie.poster_path} alt={movie.name}/>
            }
        </div>
    )
}
