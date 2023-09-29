import React, { Component, useEffect, useState } from 'react'
import { Button, Form, Container } from 'react-bootstrap'
import './styles.css'
import axios from 'axios'
import PostList from '../PostList'


const PostCreate = () => {
  const [title, setTitle] = useState('')
  const [completeTitle, setCompleteTitle] = useState()

  const onSubmit = async event => {
    event.preventDefault()

    await axios.post('http://localhost:4000/posts', { title })
    setTitle('')
    setCompleteTitle(title)
  }

  return (
    <>
      <Container>
        <h1>Create Post</h1>

        <Form onSubmit={event => {
          onSubmit(event)
        } }>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </Form.Group>

          <Button className="btn" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <hr />
      <PostList title={completeTitle}/>
    </>
  )
}

export default PostCreate
