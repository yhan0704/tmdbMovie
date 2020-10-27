import React from 'react'

export default function Movies(props) {
    console.log(props)
    const frontImageAddress="http://image.tmdb.org/t/p/original/"
    return (
        <div>
            {props.movie.original_title}
            <img src={frontImageAddress + props.movie.poster_path} alt=""/>
        </div>
    )
}
