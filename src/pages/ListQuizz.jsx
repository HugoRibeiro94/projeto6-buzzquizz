import axios from "axios";
import { useEffect } from "react";

export default function ListQuizz(){

    const config = {
        headers: { Authorization :`${import.meta.env.VITE_API_KEY}`}
    }

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes",config);
        promise.then(resposta => {
            console.log(resposta.data);
        });
        promise.catch( erro => console.log(erro) );
    },[]);

    return(
        <>
      
        </>
    )
}