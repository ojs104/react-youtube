import React from 'react'
import { Link } from 'react-router-dom'

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const VideoSearch = ({videos}) => {
  return (
    <>
     {videos.map((video, key) => (
        /* 비디오 목록을 매핑하여 각 비디오를 렌더링 */
         <div className='video' key={key}>
            <div className='video__thumb play__icon'>
            <Link 
                to={`/video/${video.id.videoId}`}
                style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}
            >
            </Link>
            </div>
            <div className='video__info'>
                <h3 className='title'>
                    <Link to= {`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
                </h3> 
                <p className='desc'>
                    {video.snippet.description}
                </p>
                <div className='info'>
                    <Link to={`/channel/${video.snippet.channelId}`}>{video.snippet.channelTitle}</Link>
                    <span className='date'>{formatDate(video.snippet.publishedAt)}</span>
                </div>
            </div>
        </div>
    ))}
    </>
  )
}

export default VideoSearch