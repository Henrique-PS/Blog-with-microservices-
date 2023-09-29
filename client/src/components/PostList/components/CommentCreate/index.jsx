import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import CommentList from '../CommentList'

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState('')
  const [completeContent, setCompleteContent] = useState()

  const handleSubmit = async event => {
    event.preventDefault()

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content
    })
    setContent('')
    setCompleteContent(content)
  }

  return (
    <div>
      <CommentList postId={postId} content={completeContent} />
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
