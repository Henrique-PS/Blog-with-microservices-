import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CommentList = ({ postId, content }) => {
  const [comments, setComments] = useState([])

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    )
    setComments(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [content])

  const rederedComments = comments.map(comment => {
    return <li key={comment.id}>{comment.content}</li>
  })

  return (
    <div>
      <ul>{rederedComments}</ul>
    </div>
  )
}

export default CommentList
