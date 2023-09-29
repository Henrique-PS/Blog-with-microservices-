import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import CommentList from '../CommentList'

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState('')
  const [commentsSize, setCommentsSize] = useState()

  const handleSubmit = async event => {
    event.preventDefault()
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    )
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content
    })
    setContent('')
    setCommentsSize(res.data.length)
  }

  return (
    <div>
      <CommentList postId={postId} commentsSize={commentsSize} />
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>New Comment</Form.Label>
          <Form.Control
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default CommentCreate
