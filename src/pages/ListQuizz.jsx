import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import QuizzUser from "../components/QuizzUser";

export default function ListQuizz(){

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
        </>
    )
}