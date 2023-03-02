import { getMovieDetailsById } from "components/api";
import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import MovieDetailsLoader from "components/Loaders/MovieDetailsLoader";
import { MovieDetailsWrapper } from "./page.styled/MovieDetailsWrapper.styled";

const MovieDetails = () => {
    const { movieId } = useParams();



    const [title, setTitle] = useState(null);
    const [overview, setOverview] = useState(null);
    const [genres, setGenres] = useState(null);
    const [posterPath, setPosterPath] = useState(null);
    const [releaseDate, setReleaseDate] = useState(null);
    const [userScore, setUserScore] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getMovieDetailsById(movieId)
            .then(({ title, overview, genres, poster_path, release_date, vote_average }) => {
                setTitle(title)
                setOverview(overview)
                setGenres(genres.map(genre => genre.name).join(', '))
                setPosterPath(poster_path)
                setReleaseDate(new Date(release_date).getFullYear())
                setUserScore((vote_average * 10).toFixed() + '%')
            })
            .catch(error => console.log(error))
            .finally(() => setIsLoaded(true))
        
    }, [movieId]);

    
    const location = useLocation();
    const goBackLink = () => {

        return location.state ? location.state.comeFromPage : null
    };

    if (!isLoaded) {
        return <MovieDetailsLoader />
    }
    

    return (
        <MovieDetailsWrapper>
            {goBackLink() && <Link className="button" to={goBackLink()}>Go back</Link>}
            <img className="poster" src={`https://image.tmdb.org/t/p/original/${posterPath}`} width={400} height={545} alt={`${title} poster`} />
            <h2>{`${title} (${releaseDate})`}</h2>
            <p className="user-score">User score: <span>{userScore}</span></p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p className="genres" >{genres}</p>
                <h2>Additional information</h2>
                <ul className="additional-info-buttons-list">
                    <li><Link className="button" to={`/movies/${movieId}/cast`} state={{comeFromPage: goBackLink()}}>Cast</Link></li>
                    <li><Link className="button" to={`/movies/${movieId}/reviews`} state={{comeFromPage: goBackLink()}}>Reviews</Link></li>
                </ul>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet/>
                </Suspense>
        </MovieDetailsWrapper>
    )
    
}

export default MovieDetails;