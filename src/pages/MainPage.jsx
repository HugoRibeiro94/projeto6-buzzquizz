import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import QuizzUser from "../components/QuizzUser";
import ListQuizz from "../components/ListQuizz";
import styled from "styled-components";

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

            <QuizzUser/>

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