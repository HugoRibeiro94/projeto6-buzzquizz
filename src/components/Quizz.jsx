import styled from "styled-components"

export default function Quizz(props){
    console.log(props);
    return(
        <>
           <Img><img src={props.quizz.image}/></Img>
        </>
    )
}

const Img = styled.div`
    img{
        width: 100%;
        height: 227px;
    }
`