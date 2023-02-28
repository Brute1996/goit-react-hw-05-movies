import { useParams } from "react-router-dom";
import { getMovieCredits } from "components/api";
import { useEffect, useState } from "react";
import { CastItem } from "components/CastItem/CastItem";

const Cast = () => {
    const { movieId } = useParams();
    
    const [cast, setCast] = useState(null);
    const [castNotFounded, setCastNotFounded] = useState(null)
    
    useEffect(() => {
        getMovieCredits(movieId)
            .then(({ cast }) => cast.length > 0 && setCast([...cast]))
            .catch(error => console.log(error))
            .finally(() => !cast && setCastNotFounded("Actors didn't find"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId])


    if (!cast) {
        return <b>{castNotFounded}</b>
    }

    return (
        <ul>
            {cast.map(({name, character, profile_path, id}) => {
                return (
                    <CastItem key={id} name={name} character={character} profile_path={profile_path} />
                )
            })}
        </ul>
    )

}

export default Cast;