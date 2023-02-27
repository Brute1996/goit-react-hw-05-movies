import { getTrendingMovie } from "components/api"
import { useEffect, useState } from "react";
import { MovieItem } from "components/MoveItem/MoveItem";

export const TrendingMovieList = () => {
    
    const [trendingMovies, setTrendingMovies] = useState(null);



    useEffect(() => {

    getTrendingMovie()
        .then(({ results }) => setTrendingMovies([...results]))
        .catch(error => console.log('Error here:' + error))
        
    }, [])
    
    if (!trendingMovies) {
        return
    }
    
    return(
        <ul>
            {
                trendingMovies.map(
                    ({ id, title }) => <MovieItem id={id} key={id} title={title} />
                )
            }
        </ul>
    )
}