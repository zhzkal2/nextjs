import React from 'react';
import { API_URL } from "../app/constants";
import styles from "../styles/movie-videos.module.css";
import axios from 'axios';

async function getVideos(id: string) {
    const response = await axios.get(`${API_URL}/${id}/videos`);
    return response.data;
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return (
        <div className={styles.container}>
            {videos.map((video) => (
                <iframe
                    key={video.id}
                    src={`https://youtube.com/embed/${video.key}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.name}
                />
            ))}
        </div>
    );
}