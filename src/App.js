import 'bulma/css/bulma.css'
import { Route } from 'react-router-dom'

import CreatePost from './CreatePost'
import PostContainer from './Post'
import NavBar from './NavBar'
import PostList from './PostList'
import { 
  Group4 
} from './ui-components';



function App () {
  return (
    <div className='section'>
      <div className='container'>
        <NavBar />
        <div className='section'>
          <div className='section'>
          <Group4 />
          </div>
          <Route path='/new'>
            <CreatePost />
          </Route>
          <Route path='/post/:id'>
            <PostContainer />
          </Route>
          <Route path='/' exact>
            <PostList />
          </Route>
        </div>
      </div>
    </div>
  )
}

export default App
