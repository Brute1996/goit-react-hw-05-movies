import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";
import { MovieItemWrapper } from "./MovieItemWrapper.styled";



export const MovieItem = ({ title, id }) => {

    const { pathname, search } = useLocation();
    
    return (<MovieItemWrapper><Link to={`/movies/${id}`} state={{comeFromPage: pathname + search}}>{title}</Link></MovieItemWrapper>)
}

MovieItem.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}