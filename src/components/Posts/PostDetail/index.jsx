import React from 'react'
import { useParams } from 'react-router-dom'
import { postData } from '../../../constants/postData'

function PostDetail() {
  const params = useParams()
  const post = postData.find((post) => post.id === parseInt(params.postId))
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  )
}

export default PostDetail
