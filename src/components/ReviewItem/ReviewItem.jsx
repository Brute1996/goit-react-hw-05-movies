import { ReviewItemWrapper } from "./ReviewItemWrapper.styled";

export const ReviewItem = ({author, content}) => {
    return (
        <ReviewItemWrapper>
            <h3>{`Author: ${author}`}</h3>
            <p>{content}</p>
        </ReviewItemWrapper>
    );
}