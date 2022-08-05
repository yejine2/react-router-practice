import { Route, Routes, BrowserRouter } from 'react-router-dom'
import PostDetail from './components/Posts/PostDetail'
import Users from './components/Users'
import PostIndex from './components/Posts/PostIndex'
import UserDetail from './components/Users/UserDetail'
import UserIndex from './components/Users/UserIndex'
import Nav from './components/Nav'
import Albums from './components/Albums'
import AlbumList from './components/Albums/AlbumList'
import Photos from './components/Albums/Photos'
import PhotoList from './components/Albums/Photos/PhotoList'
import PhotoDetail from './components/Albums/Photos/PhotoDetail'
import { lazy, Suspense } from 'react'
const Posts = lazy(() => import('./components/Posts'))

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="posts"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Posts />
            </Suspense>
          }
        >
          <Route index element={<PostIndex />} />
          <Route path=":postId" element={<PostDetail />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route index element={<UserIndex />} />
          <Route path=":userId" element={<UserDetail />} />
        </Route>
        <Route path="albums" element={<Albums />}>
          <Route index element={<AlbumList />} />
          <Route path=":albumId" element={<Photos />}>
            <Route index element={<PhotoList />} />
            <Route path="photos/:photoId" element={<PhotoDetail />} />
          </Route>
        </Route>
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
