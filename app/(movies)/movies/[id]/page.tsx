
import React, { Suspense } from 'react';
import MovieVideos from '../../../../components/movie-videos';
import MovieInfo, { getMovie } from "../../../../components/movie-info";

type IParams = Promise<{
    id: string;
}>;


export async function generateMetadata(props: { params: IParams }) {
    const params = await props.params;
    const id = params.id;
    const movie = await getMovie(id);
    return {
        title: movie.title,
    }

}




export default async function MovieDetailPage(props: { params: IParams }) {
    const params = await props.params;
    const id = params.id;

    return <div>
        <Suspense fallback={<h1>Loading a moving  info </h1>}>
            <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading a moving  viedo </h1>}>
            <MovieVideos id={id} />
        </Suspense>


    </div>
}


