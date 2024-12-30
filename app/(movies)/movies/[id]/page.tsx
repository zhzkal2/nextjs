
import React, { Suspense } from 'react';
import { API_URL } from '../../../(home)/page';
import MovieVideos from '../../../../components/movie-videos';
import MovieInfo from '../../../../components/movie-info';



export default async function MovieDetail({
    params: { id },
}: {
    params: {
        id: string
    };
}) {

    return <div>
        <h1>Movie Detail Page</h1>
        <Suspense fallback={<h1>Loading a moving  info </h1>}>
            <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading a moving  viedo </h1>}>
            <MovieVideos id={id} />
        </Suspense>


    </div>
}


