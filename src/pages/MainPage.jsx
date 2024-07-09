import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import QuizzUser from "../components/QuizzUser";
import ListQuizz from "../components/ListQuizz";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function MainPage(){

    const [quizzes, setQuizzes] = useState([]);

    const config = {
        headers: { Authorization :`${import.meta.env.VITE_API_KEY}`}
    }

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes",config);
        promise.then(res => {
            console.log(res.data);
            setQuizzes(res.data)
        });
        promise.catch( err => console.log(err) );
    },[]);

    return(
        <>
            <Header/>

            <Create>
                <p>Você não criou nenhum quizz ainda :(</p>
                <Link to="/create">
                    <button>Criar Quizz</button>
                </Link>    
            </Create> 

            <Title>Todos os quizzes</Title>

            <Box>
                {quizzes.map ( quizz => 
                    (
                        <ListQuizz
                            key={quizz.id}
                            id={quizz.id}
                            image={quizz.image}
                            title={quizz.title}
                        ></ListQuizz>
                    )
                )}
            </Box>
        </>
    )
}

const Title = styled.div`
    font-family: Roboto;
    font-size: 20px;
    font-weight: 700;
    line-height: 23.44px;
    text-align: center;
    color: rgba(0, 0, 0, 1);
`

const Box= styled.div`
    width: 1051px;
    margin: 120px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`

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