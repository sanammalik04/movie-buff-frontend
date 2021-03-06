import React from 'react'


const EditForm = (props) => {

    let handleSubmit = () => {
        console.log(props)
        props.history.push('/my-movies') 
    }

    return(
        <div className='update-form'>
              <h1>Update Movie</h1>
              <form  onSubmit={() => {
                  props.patch(props.movie)
                  handleSubmit()
            
              }
            }>
                   <input disabled="disabled" type='text' placeholder='Movie Title' name='title' value={props.movie.title} onChange={(e) => props.handleChange(e)} /><br></br><br></br>

                   <input disabled="disabled" type='text' placeholder='Genre' name='genre' value={props.movie.genre} onChange={(e) => props.handleChange(e)} /><br></br><br></br>
                  <textarea type='text' placeholder='Review'name='review' value={props.movie.review} onChange={(e) => props.handleChange(e)} /><br></br><br></br>
                  <input disabled="disabled" type='text' placeholder='Movie Poster Url' name='image' value={props.movie.image} onChange={(e) => props.handleChange(e)} /><br></br><br></br>
                  <input disabled="disabled" type='text' placeholder='Trailer Url' name='video_link' value={props.movie.video_link} onChange={(e) => props.handleChange(e)} /><br></br><br></br>
                   <input disabled="disabled" type='text' placeholder='Movie Info' name='movie_info' value={props.movie.movie_info} onChange={(e) => props.handleChange(e)} /><br></br><br></br>
                  <input type='submit' value='Update Movie' /><br></br><br></br>
              </form>
              {/* <Link to='/my-movies'> Go Back To My Movies </Link>  */}
          </div>  
    )
}

export default EditForm


{/* <form onSubmit={() => {
                  props.patch()
                  handleSubmit() }}> */}