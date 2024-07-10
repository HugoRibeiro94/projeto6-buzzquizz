import styled from "styled-components"
import Header from "../components/Header"
import { useState } from "react";

export default function CreatePage(){

    const [titleQuizz, setTitleQuizz] = useState();
    const [imageQuizz, setImageQuizz] = useState();
    const [questionQuizz, setQuestionQuizz] = useState();
    const [levelQuizz, setLevelQuizz] = useState();

    return(
        <>
            <Header/>

            <Container>
                <Title>Comece pelo começo</Title>
                <Input  
                    type="text"
                    placeholder="Titulo do seu quizz"
                    onChange={ e => setTitleQuizz(e.target.value)} 
                    value={titleQuizz}
                    required
                />
                <Input
                    type="text"
                    placeholder="URL da imagem do seu quizz"
                    onChange={ e => setImageQuizz(e.target.value)} 
                    value={imageQuizz}
                    required
                />
                <Input
                    type="number"
                    placeholder="Quantidade de perguntas do quizz"
                    onChange={ e => setQuestionQuizz(e.target.value)} 
                    value={questionQuizz}
                    required
                />
                <Input
                    type="number"
                    placeholder="Quantidade de niveis do quizz"
                    onChange={ e => setLevelQuizz(e.target.value)} 
                    value={levelQuizz}
                    required
                />
                <Button>
                    Prosseguir pra criar perguntas
                </Button>
            </Container>
        </>
    )
}

const Container = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Input = styled.input`
    width: 303px;
    height: 45px;
    margin-top: 20px;
    border-radius: 5px;
    border: solid 1px rgba(209, 209, 209, 1);
    color:rgba(209, 209, 209, 1);
    background-color:rgba(255, 255, 255, 1);
    font-family: Roboto;
    font-size: 19px;
    font-style: italic;
    font-weight: 400;
    line-height: 22.27px;
    text-align: left;
`
const Button = styled.button`
    width: 324px;
    height: 54px;
    margin-top: 50px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: rgba(236, 54, 45, 1);
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.09px;
    text-align: center;
    color: rgba(255, 245, 244, 1);
`
const Title = styled.div`
    font-family: Roboto;
    font-size: 20px;
    font-weight: 700;
    line-height: 23.44px;
    text-align: center;
    color: rgba(0, 0, 0, 1);
`
