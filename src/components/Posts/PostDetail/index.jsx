import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function PostDetail() {
  const location = useLocation()
  const navigate = useNavigate()
  const { post } = location.state ? location.state : { post: null }

  if (!post) return <p>Not Found</p>
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  )
}

export default PostDetail
