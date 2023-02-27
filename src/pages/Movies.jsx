import { getMovieByName } from "components/api";
import { MovieItem } from "components/MoveItem/MoveItem";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { MovieSearchForm } from "components/MovieSearchForm/MovieSearchForm";

const Movies = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [findedMoives, setFindedMoives] = useState(null);
    const searchQuery = searchParams.get('query') ?? '';
    
    
    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target
        const query = form.search.value;

        if (query) {
            setSearchParams({ query })
        } else {
            setSearchParams({})
        }

        form.reset()
    }


    useEffect(() => {
        if (!searchQuery) {
            return
        }

        getMovieByName(searchQuery)
            .then(({ results }) => results.length > 0 && setFindedMoives([...results]))
            .catch(error => console.log(error))
    }, [searchQuery]);



    return (
        <>
            <MovieSearchForm handleSubmit={handleSubmit} />
            {findedMoives &&
                <ul>
                    {
                        findedMoives.map(({ id, title }) => <MovieItem id={id} key={id} title={title} />)
                    }
                </ul>}
        </>
    );
};

export default Movies;