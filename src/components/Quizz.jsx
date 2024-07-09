import styled from "styled-components"

export default function Quizz(props){
    console.log(props);
    return(
        <>
           <Img>
                <img src={props.quizz.image}/>
                <label>{props.quizz.title}</label>
            </Img>
            
        </>
    )
}

const Img = styled.div`
    img{
        width: 100%;
        height: 227px;
    }
    label{
        font-family: Roboto;
        font-size: 19px;
        font-weight: 400;
        line-height: 22.27px;
        text-align: left;
        color: rgba(255, 255, 255, 1);
        position: absolute;
        top: 125px;
        left: 25%;
    }
`