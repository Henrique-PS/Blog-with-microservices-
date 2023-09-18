import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import Card from './components/Card'

const PostList = () => {
  const [posts, setPosts] = useState({})

  const fetchPosts = async () => {
    const res = await axios('http://localhost:4000/posts')
    setPosts(res.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const renderedPosts = Object.values(posts).map(posts => {
    return <Card key={posts.id} title={posts.title} />
  })
  // --> Object.values(posts): retonra um array com todos os valores dentro de posts

  return (
    <>
      <Container>
        <h1>Posts</h1>
        <div className="d-flex flex-row justigy-content-between">
          {renderedPosts}
        </div>
      </Container>
    </>
  )
}

export default PostList
