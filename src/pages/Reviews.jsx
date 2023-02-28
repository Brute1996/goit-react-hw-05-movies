import { getMovieReviews } from "components/api"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ReviewItem } from "components/ReviewItem/ReviewItem";

const Reviews = () => {
    const { movieId } = useParams();

    const [reviews, setReviews] = useState(null);
    const [reviewsNotFounded, setreviewsNotFounded] = useState(null)

    useEffect(() => {
        getMovieReviews(movieId)
            .then(({ results }) => results.length > 0 && setReviews([...results]))
            .catch(error => console.log(error))
            .finally(() => !reviews && setreviewsNotFounded("We don't have any reviews for this movie."))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[movieId])
    
    if (!reviews) {
        return <b>{reviewsNotFounded}</b>
    }

    return (
        <ul>
            {
                reviews.map(({ author, content, id }) => {
                    return (
                        <ReviewItem key={id} author={author} content={content} />
                    )
                })
            }
        </ul>
    )
};

export default Reviews;