import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    async function getMovieById(id) {
        const res = await axios('https://ancient-caverns-16784.herokuapp.com/movies/' + id);
        setMovie(res.data);
    }
    
    useEffect(() => { 
        getMovieById(movieId); 
    }, [movieId]);

    if(movie) {
        console.log(movie);
        return (
            <>  
                <div className="container " className = "bg-secondary text-white col-md-12" >
                    <div className="row" >
                        <div className= "col-md-6" >
                            <h1>{ movie.Title}</h1><span className="font-weight-light font-size-1.2rem"> ({ movie.Year })</span>
                            <p> {movie.Genre}</p>
                        </div>
                        <div className="col-md-6">
                            <p className ="font-weight-bold"> {movie.imdbRating}<span className="font-weight-light">/10</span></p>
                        </div>                  
                    </div>

                    <div className="row">
                            <div className="col-md-4 ">
                                <img className="card-img-top-00" src={ movie.Poster } alt="Movie Poster"/>  
                            </div>
                            <div className="col-md-8 ">
                                    <p><span className="font-weight-bold"> Plot</span>: {movie.Plot}</p>
                                    <p> <span className="font-weight-bold">Director:</span> { movie.Director }</p>
                                    <p><span className="font-weight-bold">Writer:</span> {movie.Writer}</p>
                                    <p><span className="font-weight-bold">Actors:</span> {movie.Actors}</p>
                                    <p><span className="font-weight-bold">Ratings:</span> {movie.Ratings[0].Value}, {movie.Ratings[1].Value}, 
                                    {movie.Ratings[2].Value}
                                    </p>
                            </div>
                    </div>
                </div>               
               
            </>
        );
    } else {
        return <h1>Loading ...</h1>;
    }
}

export default MovieDetails;