import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Posts from './components/Posts'
import PostDetail from './components/Posts/PostDetail'
import Users from './components/Users'
import PostIndex from './components/Posts/PostIndex'
import UserDetail from './components/Users/UserDetail'
import UserIndex from './components/Users/UserIndex'

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div>
      <h5>{location.pathname}</h5>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <nav>
        <Link to="/posts">Posts</Link> | <Link to="/users">Users</Link>
      </nav>
      <Routes>
        <Route path="posts" element={<Posts />}>
          <Route index element={<PostIndex />} />
          <Route path=":postId" element={<PostDetail />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route index element={<UserIndex />} />
          <Route path=":userId" element={<UserDetail />} />
        </Route>
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </div>
  )
}

export default App
