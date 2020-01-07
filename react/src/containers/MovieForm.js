import React, { useState } from 'react'

const MovieForm = (props) => {
  const [movieData, setMovieData] = useState({
    title: "",
    releaseYear: "",
    runtime: ""
  })

  const handleMovieDataChange = (event) => {
    setMovieData({
      ...movieData,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const clearForm = (event) => {
    setMovieData({
      title: "",
      releaseYear: "",
      runtime: ""
    })
  }

  const handleMovieSubmit = (event) => {
    event.preventDefault()
    props.addNewMovie({
      title: movieData.title,
      release_year: movieData.releaseYear,
      runtime: movieData.runtime
    })

    clearForm()
  }

  return(
    <div className="form">
      <form onSubmit={handleMovieSubmit}>
        <label> Title:
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleMovieDataChange}
            value={movieData.title}
          />
        </label>

        <label> Release Year:
        <input
          type="text"
          id="releaseYear"
          name="releaseYear"
          onChange={handleMovieDataChange}
          value={movieData.releaseYear}
        />
        </label>

        <label> Run Time:
        <input
          type="text"
          id="runtime"
          name="runtime"
          onChange={handleMovieDataChange}
          value={movieData.runtime}
        />
        </label>
        <input className="button" type="submit" value="Add Movie" />
      </form>
      <br></br>
      <button onClick={clearForm} className="button">Clear</button>
    </div>
  )
}

export default MovieForm;
