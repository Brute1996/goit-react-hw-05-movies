import PropTypes from 'prop-types';

import { CastItemWrapper } from "./CastItemWrapper.styled";

export const CastItem = ({ name, character, profile_path }) => {
    return (
        <CastItemWrapper>
            <img src={profile_path && `https://image.tmdb.org/t/p/original/${profile_path}`} width={100} height={150} alt={name} />
            <div>
                            <h3>{name}</h3>
            <p>{`Character: ${character}`}</p>
</div>
        </CastItemWrapper>
    );
};

CastItem.propTypes = {
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
}