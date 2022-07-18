import React from "react";
import './index.css'
import {Container} from 'react-bootstrap'
export interface Tab_view{
    id: Number,
    title:string,
    content: string,
}
export function Tabs(props:Tab_view){
    return(
        <Container>
        
        <h1>{props.content}</h1>
        </Container>
    )
}

