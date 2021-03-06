import React from 'react'
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player"
import Iframe from 'react-iframe'

const MovieShowPage = (props) => {
   
    // let  {title, genre, review, image, video_link, movie_info, likes, dislikes } = props.location.movie

    return(

     <div className='movie-show'>
        <h1 className='movie-show-title'>{props.location.movie.title}</h1>
            
            <div>
            <Iframe url={props.location.movie.video_link}
                    width="550px"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    allow="fullscreen"
                    position="relative"/>
           
                <img src= {props.location.movie.image} height="455px" width="390px"></img>
            </div>

            <div className='movie-info'>
                    <h3 className='review' >{props.location.movie.genre}</h3>
                        <p> {props.location.movie.movie_info}</p>
                             <p className='review' >Review</p>
                             <p>{props.location.movie.review}</p>

            </div>
            <div>
                {props.location.movie.user_id === props.currentUser.id ? 
                <p>Your Recomendation</p>
                 :
                 <p className='watchlist' onClick={() => props.addToWatchList(props.location.movie)}>
                     Add to My Watchlist
                </p>}<br></br>
            </div>

            <div> 
                <span >
                    {`${props.location.movie.likes} Likes`}
                </span> 
                <span className="likes introwrapper" onClick={() => this.props.likes(this.props.movie)}>
                    &#127871;
                </span>

                <span >
                    {`${props.location.movie.dislikes} Dislikes`}
                </span>
                <span className="likes introwrapper" onClick={() => this.props.dislikes(this.props.movie)}>
                    &#128530;
                </span>
            </div>

    </div>
    )
}


export default MovieShowPage