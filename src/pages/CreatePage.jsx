import styled from "styled-components"
import Header from "../components/Header"

export default function CreatePage(){
    return(
        <>
            <Header/>

            <Container>
                <Title>Comece pelo começo</Title>
                <Input  
                    type="text"
                    placeholder="Titulo do seu quizz"
                    required
                />
                <Input
                    type="text"
                    placeholder="URL da imagem do seu quizz"
                    required
                />
                <Input
                    type="text"
                    placeholder="Quantidade de perguntas do quizz"
                    required
                />
                <Input
                    type="text"
                    placeholder="Quantidade de niveis do quizz"
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
    border: solid 1px rgba(212, 212, 212, 1);
    color:rgba(212, 212, 212, 1);
    background-color:rgba(255, 255, 255, 1);
    font-family: Roboto;
    font-weight: 400;
    font-size: 19.98px;
    line-height: 24.97px;
`
const Button = styled.button`
    width: 303px;
    height: 45px;
    margin-top: 20px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: rgba(236, 54, 45, 1);
    font-family: Roboto;
    font-weight: 400;
    font-size: 20.98px;
    line-height: 26.22px;
    color: rgba(255, 255, 255, 1);
`
const Title = styled.div`
    font-family: Roboto;
    font-size: 20px;
    font-weight: 700;
    line-height: 23.44px;
    text-align: center;
    color: rgba(0, 0, 0, 1);
`
