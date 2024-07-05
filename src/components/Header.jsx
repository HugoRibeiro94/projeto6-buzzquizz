import { styled } from "styled-components";

export default function Header(){

    return(
        <Top>
            BuzzQuizz
        </Top>
    )
}

const Top = styled.div`
    width:100%;
    height: 70px;
    background-color: rgba(236, 54, 45, 1);
    box-shadow: rgba(0, 0, 0, 0.25);
    color: rgba(255, 255, 255, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    font-family: Roboto;
    font-size: 37px;
    font-weight: 700;
    line-height: 43.36px;
    text-align: left;
`