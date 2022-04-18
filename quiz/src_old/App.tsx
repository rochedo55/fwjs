import React, { createElement , useState } from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Button, Row,Col,Card,ButtonGroup} from 'react-bootstrap'
import Question from './components/Question/Question';
import Result from './components/Results/Result';
import Tabs from './components/Tabs';
function App() {
 //const div = createElement('div',null,'ola');
 const [currentQuestion,setCurrentQuestion]=useState(0)
 const [currentTab,setCurrentTab]=useState(0)
 const [textView,settextView]=useState(0)
 const [answers,setAnswers]=useState<number[]>([])
 

 function Selected(indexOfQuestion:number){
   alert(indexOfQuestion)
   setAnswers([indexOfQuestion])
   setCurrentQuestion(currentQuestion+1)
 }
let show = true ;
 const Requests = [
   {
     statement:'enunciado tal 1 ',
     options:['Coisa 1 ','coisa 2 '],
   },
   {
    statement:'enunciado tal 2 ',
    options:['Coisa B ','coisa C '],
  }
 ]


const tabs_contents = [
  {
  id:0,
  content:"Conteudo do tab 1 ",
},
{
  id:1,
  content:"Conteudo do tab 2 "
},
{
  id:2,
  content:"Conteudo do coisa 3"
},
]


 function NextQuestion(){
  setCurrentQuestion(currentQuestion+1)
  console.log('Numero da questao '+currentQuestion)
}

function changeTab(id:any){
    setCurrentTab(id)
}


 //ßconsole.log(Requests.length)
  if(show){
    return (

      <Container>
      <Card>
  <Card.Header>
  <ButtonGroup aria-label="Basic example">
    {tabs_contents.map((txt,index)=>(<Button variant="secondary" key={index} onClick={()=>{changeTab(txt.id)}}>{txt.id}-{index}</Button>))}
    </ButtonGroup>
  </Card.Header>
  <Card.Body>
    
    <Card.Title></Card.Title>
    <Card.Text>
    <Tabs id={currentTab} content={tabs_contents[currentTab].content}/>
    </Card.Text>
   
  </Card.Body>
</Card>
      </Container>
    )
  }
   return (
    <Container>
      <h1>Olá mundo!</h1>
      <Question statement={Requests[currentQuestion].statement} number_of_question={currentQuestion} options={Requests[currentQuestion].options} onSelection={Selected}/>
     
      <button onClick={NextQuestion}>Click</button>
    </Container>
  );
}

export default App;
