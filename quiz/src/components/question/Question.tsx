import React from 'react'
import './Question.css'
interface Questions{
    statement: string,
    number_of_question: Number,
    options: string[],
    onSelection: Function
  }

  function Reply(){
    console.log('chamou')
  }
  function Question(props: Questions){


    return(<>
    <h1>Enunciado da questão {props.number_of_question}</h1>
    <p>{props.statement}</p>
    {props.options.map((txt,index)=>(<button key={index} onClick={()=>{props.onSelection(index)}}>{txt}</button>))}
    </>)
  }

  export default Question