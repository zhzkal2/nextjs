
import React, { Suspense } from 'react';
import { API_URL } from '../../../(home)/page';
import MovieVideos from '../../../../components/movie-videos';
import MovieInfo, { getMovie } from "../../../../components/movie-info";

interface IParams {
    params: { id: string }
}


export async function generateMetadata({ params: { id } }: IParams) {
    const movie = await getMovie(id);
    return {
        title: movie.title,
    }

}




export default async function MovieDetailPage({
    params: { id },
}: IParams) {

    return <div>
        <Suspense fallback={<h1>Loading a moving  info </h1>}>
            <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading a moving  viedo </h1>}>
            <MovieVideos id={id} />
        </Suspense>


    </div>
}


