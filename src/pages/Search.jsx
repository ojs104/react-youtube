import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api'

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const Search = () => {
    const { searchId } = useParams();
    const [ videos, setVideo ] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?type=video&part=snippet&q=${searchId}`)
            .then((data) => setVideo(data.items));
    }, [searchId]);

    return (
        <section id='searchPage'>
            <h2>👹{searchId} 영상입니다.</h2>
            <div className='video__inner search'>
                {videos.map((video, key) => (
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
            </div>
        </section>
    )
}

export default Search