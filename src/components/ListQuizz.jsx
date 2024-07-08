import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function ListQuizz({id,image,title}){

    return(
        <Link to={`/quizz/${id}`}>
            <List> 
            <img src={image}/> 
            <label>{title}</label>
            </List>
        </Link>
    )
}

const List = styled.div`
    width:340px;
    height: 181px;
    background-color: #aba6a5;
    margin: 5px;
    display: flex;
    flex-wrap: wrap;
    display: inline-block;
    position: relative;
    img{
        width:340px;
        height: 181px;
    }
    label{
        font-family: Roboto;
        font-size: 19px;
        font-weight: 400;
        line-height: 22.27px;
        text-align: left;
        color: rgba(255, 255, 255, 1);
        left: 5px;
        position: absolute;
        bottom: 20px;
        left: 10px;
    }
`
