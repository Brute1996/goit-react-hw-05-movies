import { CastItemWrapper } from "./CastItemWrapper.styled";

export const CastItem = ({ name, character, profile_path }) => {
    return (
        <CastItemWrapper>
            <img src={`https://image.tmdb.org/t/p/original/${profile_path}`} width={100} alt={name} />
            <div>
                            <h3>{name}</h3>
            <p>{`Character: ${character}`}</p>
</div>
        </CastItemWrapper>
    );
};