import React from 'react'
import './styles.css'
import CommentCreate from '../CommentCrate'
import CommentList from '../CommentList'

const PostCard = ({ postId, title}) => {
  return (
    <div className="card">
      <div className="body-card">
        <h3>{title}</h3>
        <CommentCreate postId={postId} />
      </div>
    </div>
  )
}

export default PostCard
