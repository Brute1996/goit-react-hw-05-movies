import styled from "@emotion/styled";

export const ReviewItemWrapper = styled.li`
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
padding: 16px;
border: 1px solid green;
border-radius: 10px;
:not(:last-child){
    margin-bottom: 16px;
}
`