import { Fragment, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import '../Styles/TrailerVideo.css'

function TvShowsTrailer({ TvShowTitle, toggle }) {
   const [video, setVideo] = useState("");
   const [videoURL, setVideoURL] = useState("");

   function handleSearch() {
      setVideo(TvShowTitle)
      movieTrailer(video).then((res) => {
         setVideoURL(res);
      });
   }
   useEffect(() => {
      handleSearch()
   }, [videoURL])

   return (
      <Fragment>
         <div className='Container'>
         </div>
         <div className='player'>
            <h1 id={toggle ? 'TrailerMovie-name-dark' : 'TrailerMovie-name-light'}>{TvShowTitle} </h1>

            <ReactPlayer url={videoURL} controls={true} muted={false} />
         </div>
      </Fragment>
   );
}


export default TvShowsTrailer  