import { Outlet } from 'react-router-dom'
import PostCreate from './components/PostCreate/index.jsx'
import PostList from './components/PostList/index.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <PostCreate/>
    </>
  )
}

export default App
