import { MovieSearchFormWrapper } from "./MovieSearchFormWrapper.styled";

export const MovieSearchForm = ({ handleSubmit }) => {
    return (
        <MovieSearchFormWrapper onSubmit={handleSubmit}>
            <input type="text" name="search" />
            <button type="submit">Search</button>
        </MovieSearchFormWrapper>

    );
};