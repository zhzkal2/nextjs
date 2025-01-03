import React, { Suspense } from "react";
import axios from "axios";
import exp from 'constants';
import LiveVideos from '../../components/live-video';

export const metadata = {
    title: "Live",
};



export default async function LivePage() {

    return (
        <div>

            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <LiveVideos />
            </Suspense>
        </div>
    );

}





// "channelThumbnail": "https://livecloud-thumb.akamaized.net/chzzk/livecloud/KR/stream/29311793/live/9603403/record/34936887/thumbnail/image_480.jpg",