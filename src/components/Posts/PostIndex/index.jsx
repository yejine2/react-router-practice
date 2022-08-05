import React, { useEffect, useState } from 'react'
import { Link, useSearchParams, useLocation } from 'react-router-dom'
import { postData } from '../../../constants/postData'

function PostIndex() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [posts, setPosts] = useState(postData)
  const location = useLocation()

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
    console.log(location.search)
  }, [searchParams])

  return (
    <div>
      <input onChange={searchInputHandler} />
      {posts.map((post) => {
        return (
          <p key={post.id}>
            <Link
              to={`/posts/${post.id}`}
              state={{ post: posts.find((data) => data.id === post.id) }}
            >
              {post.title}
            </Link>
          </p>
        )
      })}
    </div>
  )
}

export default PostIndex
