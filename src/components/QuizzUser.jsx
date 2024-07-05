import { styled } from "styled-components";

export default function QuizzUser(){

    return(
        <Create>
            <p>Você não criou nenhum quizz ainda :(</p>
            <button>Criar Quizz</button>
        </Create> 
    )
}

const Create = styled.div`
    margin:150px;
    height: 181px;
    border: 1px dotted rgba(212, 212, 212, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        font-family: Roboto;
        font-size: 20px;
        font-weight: 400;
        line-height: 23.44px;
        text-align: center;
        color: rgba(185, 185, 185, 1);
    }
    button{
        width: 151px;
        height: 40px;
        gap: 0px;
        border-radius: 50px;
        border: 1px dotted rgba(236, 54, 45, 1);
        background-color: #FFFF;
        color: rgba(236, 54, 45, 1);
        font-family: Roboto;
        font-size: 21px;
        font-weight: 400;
        line-height: 24.61px;
        text-align: center;
    }
`