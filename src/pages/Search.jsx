import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api'
import VideoSearch from '../components/video/VideoSearch';



const Search = () => {
    // React Router를 사용하여 URL에서 매개변수를 추출

    const { searchId } = useParams();
    const [ videos, setVideo ] = useState([]);

    // useEffect를 사용하여 검색어(searchId)가 변경될 때 API를 호출
    useEffect(() => {
        fetchFromAPI(`search?type=video&part=snippet&q=${searchId}`)
            .then((data) => setVideo(data.items)); // 가져온 데이터로 비디오 목록 업데이트
    }, [searchId]);

    return (
        <section id='searchPage'>
            <h2>👹{searchId} 영상입니다.</h2>
            <div className='video__inner search'>
              <VideoSearch videos={videos} />  
            </div>
        </section>
    )
}

export default Search