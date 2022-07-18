import React from 'react'
import {Container} from 'react-bootstrap'
interface Cards{
    Content:string;
    backgroundColor?:string;
    borderRadius?:Number;
    ContentAlert:string;
}

export default function Card(props:Cards){
    

    return (
<Container  style={{ width: '18rem' }}>

        <div style={{backgroundColor:props.backgroundColor,borderRadius:`${props.borderRadius}px`}}>
        <h1>{props.Content}</h1>
        <br></br>
        <button onClick={()=>{alert(props.ContentAlert)}}>Click - Me ! </button>
        </div>
       
</Container>
    )
}