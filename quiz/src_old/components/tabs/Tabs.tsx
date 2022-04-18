import React from "react";
import './index.css'
import {Container} from 'react-bootstrap'
interface Tab_view{
    id: Number,
    content: string,
}
function Tabs(props:Tab_view){
    return(
        <Container>
        
        <h1>{props.content}</h1>
        </Container>
    )
}

export default Tabs