import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, Container } from 'react-bootstrap'
import './styles.css'
import axios from 'axios'

const PostCreate = () => {
  const [title, setTitle] = useState('')

  const onSubmit = async event => {
    event.preventDefault()

    await axios.post('http://localhost:4000/posts', { title })

    setTitle('')
  }

  return (
    <>
      <Container>
        <h1>Create Post</h1>

        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              onChange={e => setTitle(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button className="btn" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default PostCreate
