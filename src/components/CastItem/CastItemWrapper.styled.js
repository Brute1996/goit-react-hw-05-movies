import styled from "@emotion/styled";

export const CastItemWrapper = styled.li`
display: flex;
align-items: center;
width: 300px;
margin: 0 auto;
padding: 16px;
border: 1px solid green;
border-radius: 10px;

img{
    border-radius: 5px;
    margin-right: 30px;
}




:not(:last-child){
    margin-bottom: 16px;
}
`