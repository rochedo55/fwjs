import React, { FormEvent, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'


import { Tab_view } from '../Tabs'
interface TabsFormProps {
  onSubmit: (qst: Tab_view) => void
}

export default function FormCards({ onSubmit }: TabsFormProps) {

  const [tabs_count, setTabs_count] = useState(0)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  function submit(e: FormEvent) {

    e.preventDefault()

    onSubmit({ id: tabs_count, title, content })

  }

  return (
    <Container  style={{ width: '18rem' }}>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" hidden>
          <Form.Label>Núm.tabs</Form.Label>
          <Form.Control type="number" placeholder="insert number of tab"
            value={tabs_count} onChange={e => setTabs_count(parseInt(e.target.value))} disabled />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Título</Form.Label>
          <Form.Control type="text" required maxLength={10} minLength={4} placeholder="insert title to new tab"
            value={title} onChange={e => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Conteúdo</Form.Label>
          <Form.Control as="textarea" rows={3}
            value={content} required onChange={e => setContent(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Adicionar</Button>
      </Form>
    </Container>
  )
}

/*----------------------------------------------------------------

*/