import PropTypes from 'prop-types'
import { ReviewItemWrapper } from "./ReviewItemWrapper.styled";

export const ReviewItem = ({author, content}) => {
    return (
        <ReviewItemWrapper>
            <h3>{`Author: ${author}`}</h3>
            <p>{content}</p>
        </ReviewItemWrapper>
    );
}

ReviewItem.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}