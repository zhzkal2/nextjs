import React from 'react';
import { API_URL2 } from "../app/constants";
import axios from 'axios';
import { EXPORT_DETAIL } from 'next/dist/shared/lib/constants';


async function getLives() {
    const response = await axios.get(`http://localhost:8080/test2`);
    return response.data.map((video: any) => ({
        status: video.status, // 방송 여부

        channelName: video.channelName, // 채널 이름
        liveTitle: video.liveTitle, // 방송 제목
        channelImageUrl: video.channelImageUrl, // 프로필 이미지

        channelThumbnail: video.channelThumbnail, // 썸네일
        concurrentUserCount: video.concurrentUserCount, // 시청자 수

        liveCategoryValue: video.liveCategoryValue, // 카테고리
        channelId: video.channelId, // 채널 ID
        channelLink: video.channelLink // 채널 링크

    }));
}

export default async function LiveVideos() {

    const videos = await getLives();
    return (
        <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 3xl:px-48 ">
            {videos.map((video) => (
                <div key={video.channelId} className="p-2">
                    <div className="overflow-hidden bg-white rounded-lg shadow-lg responsive-container">
                        <div className="aspect-w-16 aspect-h-9">
                            <a href={video.channelLink} target="_blank" rel="noopener noreferrer" className="relative block w-full h-full">
                                <img src={video.channelThumbnail} alt={video.liveTitle} className="object-cover w-full h-full" />
                                <p className="absolute px-2 py-1 text-xs text-white bg-black bg-opacity-50 rounded bottom-2 left-2">
                                    {video.concurrentUserCount}명 시청 중
                                </p>
                            </a>
                        </div>
                        <div className="p-3">
                            <div className="flex items-center space-x-2">
                                <img src={video.channelImageUrl} alt={video.channelName} className="object-cover w-12 h-12 rounded-full" />
                                <div className="flex flex-col flex-1 min-w-0">
                                    <p className="block w-full text-base font-bold text-black truncate sm:text-sm md:text-base lg:text-base responsive-text">{video.liveTitle}</p>
                                    <p className="text-sm font-bold text-black sm:text-xs md:text-sm responsive-text">{video.channelName}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}