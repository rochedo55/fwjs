import React, { createContext, createElement , useState ,useContext } from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Button, Row,Col,Card,ButtonGroup} from 'react-bootstrap'
import {Tab_view,Tabs} from './components/Tabs'

import useTabs from './hooks/tabs-hooks'
import FormCards from './components/FormCards/FormCards';
function App() {
 //const div = createElement('div',null,'ola');
 const [currentTab,setCurrentTab]=useState(0)
 
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

 const tabs_contents_ctx = createContext<Tab_view[]>([{id:0,title:'', content:" "}])

 const {tabs,createTabs} = useTabs()

 function updateTabs(qst:Tab_view){
   //console.log(qst)
   createTabs(qst)
 }

function changeTab(id:any){
    setCurrentTab(id)
}


function TabsList(){
  const tabs_contents = useContext(tabs_contents_ctx)
  return(
    <Card >
    <Card.Header>
    <ButtonGroup aria-label="Basic example">
  
      {tabs_contents.map((txt,index)=>(<Button variant="secondary" key={index} onClick={()=>{changeTab(txt.id)}}>{txt.title}</Button>))}
      
      </ButtonGroup>
    </Card.Header>
    <Card.Body>
      
      <Card.Title></Card.Title>
      <Card.Text>
      {tabs_contents[0] ? <Tabs id={currentTab} title={tabs_contents[currentTab].title} content={tabs_contents[currentTab].content}/>:''}
      </Card.Text>
     
    </Card.Body>
  </Card>
  )
}

 //ßconsole.log(Requests.length)
  if(show){
    return (
      <tabs_contents_ctx.Provider value={tabs}>
      <Container >
     <TabsList/>
  <FormCards onSubmit={updateTabs}/>
      </Container>
      </tabs_contents_ctx.Provider>
    )
  }
   return (
    <Container  >
      <h1>Olá mundo!</h1>
     
    </Container>
  );
}

export default App;
