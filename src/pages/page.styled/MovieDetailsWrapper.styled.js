import styled from "@emotion/styled";

export const MovieDetailsWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 16px;

.button{
    padding: 4px;
    background-color: green;
    width: 75px;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    color: white;

    :hover,
    :focus{
        background-color: red;
    }
}

.poster{
    margin: 0 auto;
}

.user-score{
    margin: 0 auto;
}

h2{
    margin: 0 auto;
}

.genres{
    margin: 0 auto;
}

.additional-info-buttons-list{
    display: flex;
    gap: 30px;
    justify-content: space-evenly;
}

`