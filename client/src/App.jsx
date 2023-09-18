import { Outlet } from 'react-router-dom'
import PostCreate from './components/PostCreate/index.jsx'
import PostList from './components/PostList/index.jsx'

function App() {

  return (
    <>
      <PostCreate/>
      <hr />
      <PostList/>
    </>
  )
}

export default App
