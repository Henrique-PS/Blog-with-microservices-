import React, { Component, useEffect, useState } from 'react'
import { Button, Form, Container } from 'react-bootstrap'
import './styles.css'
import axios from 'axios'
import PostList from '../PostList'


const PostCreate = () => {
  const [title, setTitle] = useState('')
  const [postsSize, setPostsSize] = useState()

  const onSubmit = async event => {
    event.preventDefault()
    const res = await axios('http://localhost:4000/posts')

    await axios.post('http://localhost:4000/posts', { title })
    setTitle('')
    setPostsSize(Object.values(res.data).length)
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
      <PostList postsSize={postsSize}/>
    </>
  )
}

export default PostCreate
