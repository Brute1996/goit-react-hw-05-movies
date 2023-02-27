import styled from "@emotion/styled";

export const MovieSearchFormWrapper = styled.form`
display: flex;
gap: 8px;
justify-content: center;
margin-bottom: 16px;
input{
    border-radius: 5px;
}

button{
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
`