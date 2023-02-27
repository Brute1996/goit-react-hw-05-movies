const { default: styled } = require("@emotion/styled");

export const MainLayoutWtapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 650px;
min-height: 450px;
margin: 0 auto;
background-color: antiquewhite;
header{
    display: flex;
    gap: 20px;
    font-size: 26px;
    font-weight: 700;
    padding: 16px;
    border-bottom: 3px solid green;
    
    width: 100%;
    justify-content: center;
}

main{
    padding: 16px;
}

`