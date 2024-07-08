import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import Quizz from "../components/Quizz";

export default function QuizzPage(){

    const {idQuizz} = useParams();

    const [ quizz, setQuizz ] = useState()

    const config = {
        headers: { Authorization :`${import.meta.env.VITE_API_KEY}`}
    }

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes/${idQuizz}`,config);

        promise.then( (res) => {
            setQuizz(res.data)
            console.log(res.data);
        });

        promise.catch( (err) => {
            console.log(err.response.data)
        });

    },[]);

    return(
        <>
            <Header/>
        
            <Quizz quizz={quizz}></Quizz>
        </>
    )
}
