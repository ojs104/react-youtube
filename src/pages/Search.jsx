import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }


const Search = () => {
    // useState 훅을 사용하여 "videos" 배열과 "setVideo" 함수를 초기화합니다.
    const [videos, setVideo ] = useState([]);

    useEffect(() => {
        // YouTube Data API에 GET 요청을 보내고 검색 결과를 가져옵니다.
        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyATwAOpBF6MOvpTvcQ_OsoymSzf0WLmv6U")
            .then(response => response.json())  // 응답을 JSON 형식으로 변환합니다.
            .then(result => {
                // API 응답 데이터에서 "items" 배열을 추출하고 "videos" 상태를 업데이트합니다.
                console.log(result.items); 
                result.items.forEach((video) => {
                    video.snippet.publishedAt = formatDate(video.snippet.publishedAt);
                });          
                setVideo(result.items)               // "videos" 상태 업데이트
            })
            .catch(error => console.log(error));     // 오류가 발생하면 콘솔에 오류 메시지를 출력합니다.
    }, []);





  return (
    <section id='searchPage'>
      <h2>제목</h2>
      <div className='video__inner sarch'>
        {videos.map((video, key) => (
             <div className='video' key={key}>
                <div className='video__thumb'>
                    <Link
                         to='/video/videoId'
                        style={{backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}
                        >
                         
                    </Link>
                </div>
            <div className='video__info'>
                <div className='title'>
                    <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
                </div>
                <div className='desc'>
                     {video.snippet.description}
                </div>
               <div className='info'>
                   <span className='autor'>{video.snippet.channelTitle}</span>
                   <span className='date'>{video.snippet.publishedAt}</span>
               </div>
             </div>
           </div>
        ))};             
      </div>
    </section>
  )
}

export default Search