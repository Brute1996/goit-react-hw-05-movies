import { getMovieByName } from "components/api";
import { MovieItem } from "components/MoveItem/MoveItem";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { MovieSearchForm } from "components/MovieSearchForm/MovieSearchForm";
import { Loader } from "components/Loaders/Loader";

const Movies = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [findedMoives, setFindedMoives] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const searchQuery = searchParams.get('query') ?? '';
    
    
    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target
        const query = form.search.value.trim();

        if (query) {
            setSearchParams({ query })
        } else {
            alert('Enter something')
            setSearchParams({})
        }

        form.reset()
    }

    useEffect(() => {
        if (!searchQuery) {
            setIsLoaded(true)
            return
        }
        
        setIsLoaded(false)
        setFindedMoives([])

        getMovieByName(searchQuery)
            .then(({ results }) => setFindedMoives([...results]))
            .catch(error => console.log(error))
            .finally(() => setIsLoaded(true))
    }, [searchQuery]);

    



    return (
        <>
            <MovieSearchForm handleSubmit={handleSubmit} />

            {findedMoives && findedMoives.length > 0 &&
                <ul>
                    {
                        findedMoives.map(({ id, title }) => <MovieItem id={id} key={id} title={title} />)
                    }
                </ul>
            }

            {isLoaded && findedMoives && findedMoives.length === 0 && <b>No results</b>}

            {!isLoaded && <Loader/>}
        </>
    );
};

export default Movies;