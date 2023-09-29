import React, { useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import axios from 'axios'
import PostCard from './components/PostCard'

const PostList = ({ title }) => {
  const [posts, setPosts] = useState({})

  const fetchPosts = async () => {
    const res = await axios('http://localhost:4000/posts')
    setPosts(res.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [title])

  const renderedPosts = Object.values(posts).map(post => {

    return (
      <PostCard
        key={post.id}
        title={post.title}
        postId={post.id}
      />
    )
  })
  // --> Object.values(posts): retonra um array com todos os valores dentro de posts

  return (
    <>
      <Container>
        <h1>Posts</h1>
        <div className="d-flex flex-row flex-wrap">{renderedPosts}</div>
      </Container>
    </>
  )
}

export default PostList
