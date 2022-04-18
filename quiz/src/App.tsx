import React, { createElement, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Row, Col, Card, ButtonGroup } from 'react-bootstrap'
import Question from './components/Question/Question';
import Result from './components/Results/Result';
import Tabs from './components/Tabs';
function App() {
  //const div = createElement('div',null,'ola');
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [currentTab, setCurrentTab] = useState(0)
  const [textView, settextView] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])


  function Selected(indexOfQuestion: number) {
    alert(indexOfQuestion)
    setAnswers([indexOfQuestion])
    setCurrentQuestion(currentQuestion + 1)
  }
  let show = true;
  const Requests = [
    {
      statement: 'enunciado tal 1 ',
      options: ['Coisa 1 ', 'coisa 2 '],
    },
    {
      statement: 'enunciado tal 2 ',
      options: ['Coisa B ', 'coisa C '],
    }
  ]


  const tabs_contents = [
    {
      id: 0,
      content: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker. ",
      title: "Primeira aba"
    },
    {
      id: 1,
      content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      title: "Segunda aba"
    },
    {
      id: 2,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida orci massa, ut convallis arcu eleifend id. Sed turpis nisi, gravida at cursus eget, commodo in velit. Phasellus sit amet dapibus neque. Mauris rhoncus sem eu erat accumsan, a suscipit diam lobortis. Pellentesque ullamcorper feugiat diam malesuada mattis. Cras quis bibendum mi. Donec arcu tellus, suscipit quis suscipit sit amet, interdum rhoncus purus.",
      title: "Terceira aba"
    },
  ]


  function NextQuestion() {
    setCurrentQuestion(currentQuestion + 1)
    console.log('Numero da questao ' + currentQuestion)
  }

  function changeTab(id: any) {
    setCurrentTab(id)
  }


  //ßconsole.log(Requests.length)
  if (show) {
    return (

      <Container>
        <Card>
          <ButtonGroup aria-label="Basic example" className='botoes'>
            {tabs_contents.map((txt, index) => (<Button className='botao' variant="primary" key={index} onClick={() => { changeTab(txt.id) }}>{txt.id +1}</Button>))}
          </ButtonGroup>
          <Card.Body>

            <Card.Title>{tabs_contents[currentTab].title}</Card.Title>
            <Card.Text>
              <Tabs id={currentTab} content={tabs_contents[currentTab].content} />
            </Card.Text>

          </Card.Body>
        </Card>
      </Container>
    )
  }
  return (
    <Container>
      <h1>Olá mundo!</h1>
      <Question statement={Requests[currentQuestion].statement} number_of_question={currentQuestion} options={Requests[currentQuestion].options} onSelection={Selected} />

      <button onClick={NextQuestion}>Click</button>
    </Container>
  );
}

export default App;
