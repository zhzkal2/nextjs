
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Movie from "../../components/movie";
import style from "../../styles/home.module.css";

export const metadata = {
    title: "Home",

};


export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";


async function getMovies() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}


export default async function HomePage() {

    const movies = await getMovies();

    return (
        <div className={style.container}>
            {movies.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                />
            ))};
        </div>

    )


}