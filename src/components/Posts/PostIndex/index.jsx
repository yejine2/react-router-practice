import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { postData } from '../../../constants/postData'

function PostIndex() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [posts, setPosts] = useState(postData)

  const searchInputHandler = (e) => {
    const filter = e.target.value
    filter ? setSearchParams({ filter }) : setSearchParams({})
  }

  useEffect(() => {
    setPosts(
      postData.filter((post) => {
        const filter = searchParams.get('filter')
        const title = post.title.toLowerCase()
        return filter ? title.includes(filter) : true
      }),
    )
  }, [searchParams])

  return (
    <div>
      <input onChange={searchInputHandler} />
      {posts.map((post) => (
        <Link to={`/posts/${post.id}`}>
          <p>{post.title}</p>
        </Link>
      ))}
    </div>
  )
}

export default PostIndex
